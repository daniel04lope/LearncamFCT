import { Component, inject, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  Auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  TwitterAuthProvider
} from '@angular/fire/auth';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as faceapi from 'face-api.js';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);
  private cd = inject(ChangeDetectorRef);

  loginForm!: FormGroup;
  firebaseErrorMessage = '';
  loading = false;

  @ViewChild('videoPreview') videoEl!: ElementRef<HTMLVideoElement>;

  showVideoPreview = false;
  faceMatcher: faceapi.FaceMatcher | null = null;
  usersData: Array<{ email: string; password: string; descriptor: Float32Array }> = [];
  private detectionInterval!: number;
  private modelsLoaded = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnDestroy() {
    this.cancelFaceLogin();
  }

  // --- LOGIN TRADICIONAL ---
  async onSubmit() {
    this.firebaseErrorMessage = '';
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    const { email, password } = this.loginForm.value;
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['/dashboard']);
    } catch (err: any) {
      this.firebaseErrorMessage = this.mapError(err);
    } finally {
      this.loading = false;
    }
  }

  async loginWithGoogle() {
    this.firebaseErrorMessage = '';
    this.loading = true;
    try {
      await signInWithPopup(this.auth, new GoogleAuthProvider());
      this.router.navigate(['/dashboard']);
    } catch (err: any) {
      this.firebaseErrorMessage = this.mapError(err);
    } finally {
      this.loading = false;
    }
  }

  async loginWithTwitter() {
    this.firebaseErrorMessage = '';
    this.loading = true;
    try {
      await signInWithPopup(this.auth, new TwitterAuthProvider());
      this.router.navigate(['/dashboard']);
    } catch (err: any) {
      this.firebaseErrorMessage = this.mapError(err);
    } finally {
      this.loading = false;
    }
  }

  private mapError(err: any): string {
    const code = err.code || err.message || '';
    switch (code) {
      case 'auth/invalid-email':
        return 'Correo inválido';
      case 'auth/user-disabled':
        return 'Usuario deshabilitado';
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        return 'Credenciales incorrectas';
      case 'auth/popup-closed-by-user':
        return 'Ventana cerrada antes de completar';
      default:
        return typeof code === 'string' ? code : 'Error desconocido';
    }
  }

  // --- LOGIN FACIAL ---
  async signInWithFacial() {
    this.firebaseErrorMessage = '';
    this.loading = true;

    try {
      await this.loadModels();
      await this.loadUsersDescriptors();

      if (!this.faceMatcher) {
        throw new Error('No hay usuarios con rostros registrados');
      }

      this.showVideoPreview = true;
      await this.startCamera();
      this.startDetectionLoop();
    } catch (err: any) {
      this.firebaseErrorMessage = err.message;
      this.loading = false;
    }
  }

  private async loadModels() {
    if (this.modelsLoaded) return;
    const base = '/assets/facedetection';
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(`${base}/tiny_face_detector`),
      faceapi.nets.faceLandmark68Net.loadFromUri(`${base}/face_landmark_68`),
      faceapi.nets.faceRecognitionNet.loadFromUri(`${base}/face_recognition`)
    ]);
    this.modelsLoaded = true;
  }

  private async loadUsersDescriptors() {
    const snap = await getDocs(collection(this.firestore, 'users'));
    const labeled: faceapi.LabeledFaceDescriptors[] = [];
    this.usersData = [];

    for (const doc of snap.docs) {
      const d = doc.data() as any;
      if (Array.isArray(d.faceDescriptor) && d.faceDescriptor.length === 128 && d.password) {
        const desc = new Float32Array(d.faceDescriptor as number[]);
        labeled.push(new faceapi.LabeledFaceDescriptors(d.email, [desc]));
        this.usersData.push({ email: d.email, password: d.password, descriptor: desc });
      }
    }

    if (labeled.length) {
      this.faceMatcher = new faceapi.FaceMatcher(labeled, 0.6);
    } else {
      this.faceMatcher = null;
    }
  }

  private async startCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: 640, height: 480 } });
    this.videoEl.nativeElement.srcObject = stream;
    await this.videoEl.nativeElement.play();
  }

  private startDetectionLoop() {
    this.detectionInterval = window.setInterval(async () => {
      const det = await faceapi
        .detectSingleFace(this.videoEl.nativeElement, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceDescriptor();

      if (det && this.faceMatcher) {
        const best = this.faceMatcher.findBestMatch(det.descriptor);
        if (best.label !== 'unknown') {
          // best.label es el email
          const user = this.usersData.find(u => u.email === best.label)!;
          await this.finishFaceLogin(user.email, user.password);
        }
      }
    }, 1500);
  }

  private async finishFaceLogin(email: string, password: string) {
    this.cancelFaceLogin();
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['/dashboard']);
    } catch (err: any) {
      this.firebaseErrorMessage = this.mapError(err);
    } finally {
      this.loading = false;
    }
  }

  cancelFaceLogin() {
    clearInterval(this.detectionInterval);
    if (this.videoEl?.nativeElement?.srcObject) {
      (this.videoEl.nativeElement.srcObject as MediaStream).getTracks().forEach(t => t.stop());
    }
    this.showVideoPreview = false;
    this.loading = false;
  }
}
