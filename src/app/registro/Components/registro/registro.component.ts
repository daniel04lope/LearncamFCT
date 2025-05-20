import { CommonModule } from '@angular/common';
import { encrypt} from '../../../../util/encryption.util'

import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { 
  AbstractControl, 
  FormBuilder, 
  FormGroup, 
  ReactiveFormsModule, 
  ValidationErrors, 
  Validators 
} from '@angular/forms';
import { 
  createUserWithEmailAndPassword, 
  updateProfile, 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  TwitterAuthProvider,
  UserCredential
} from 'firebase/auth';
import { Auth } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as faceapi from 'face-api.js';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  registerForm!: FormGroup;
  strengthText = '';
  strengthPercent = '0%';
  strengthClass = '';
  firebaseErrorMessage = '';
  submitting = false;
  
  // Variables para el reconocimiento facial
  faceDescriptor: number[] | null = null;
  faceRegistered = false;
  submittingFace = false;
  showVideoPreview = false;
  private videoElement!: HTMLVideoElement;

  ngOnInit(): void {
    this.initForm();
    this.setupPasswordStrengthListener();
    this.loadFaceModels();
  }

  private initForm(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordStrengthValidator]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    }, { validators: this.passwordsMatchValidator });
  }

  private async loadFaceModels(): Promise<void> {
    try {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/assets/facedetection/tiny_face_detector'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/assets/facedetection/face_landmark_68'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/assets/facedetection/face_recognition')
      ]);
    } catch (error) {
      console.error('Error loading face models:', error);
      this.firebaseErrorMessage = 'Error inicializando el sistema de reconocimiento facial';
    }
  }

  async registerFace(): Promise<void> {
    if (this.submittingFace) return;

    this.submittingFace = true;
    this.firebaseErrorMessage = '';

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480, facingMode: 'user' } 
      });
      
      this.videoElement = document.createElement('video');
      this.videoElement.srcObject = stream;
      await this.videoElement.play();
      this.showVideoPreview = true;

      const detectFace = async () => {
        if (!this.videoElement) return;

        const detections = await faceapi
          .detectSingleFace(
            this.videoElement, 
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceLandmarks()
          .withFaceDescriptor();

        if (detections) {
          this.faceDescriptor = Array.from(detections.descriptor);
          this.faceRegistered = true;
          this.stopCamera();
        } else {
          requestAnimationFrame(detectFace);
        }
      };

      await detectFace();
    } catch (error: any) {
      this.handleFaceError(error);
    } finally {
      this.submittingFace = false;
    }
  }

  private handleFaceError(error: any): void {
    console.error('Face registration error:', error);
    this.firebaseErrorMessage = error.name === 'NotAllowedError' 
      ? 'Debes permitir el acceso a la cámara para registrar tu rostro' 
      : 'Error al acceder a la cámara. Intenta de nuevo.';
    this.stopCamera();
  }

  stopCamera(): void {
    if (this.videoElement?.srcObject) {
      (this.videoElement.srcObject as MediaStream).getTracks().forEach(track => {
        track.stop();
      });
      this.showVideoPreview = false;
    }
  }

async onSubmit(): Promise<void> {
  if (this.registerForm.invalid || this.submitting) return;

  this.submitting = true;
  this.firebaseErrorMessage = '';

  const { name, email, password } = this.registerForm.value;
  const encryptedPassword = encrypt(password); // <--- Aquí ciframos

  try {
    const userCredential = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );

    await updateProfile(userCredential.user, { displayName: name });

    const userDocRef = doc(this.firestore, 'users', userCredential.user.uid);
    await setDoc(userDocRef, {
      uid: userCredential.user.uid,
      displayName: name,
      email: email,
      password: encryptedPassword, // <--- Guardamos cifrado
      faceDescriptor: this.faceDescriptor,
      registrationDate: new Date(),
      lastLogin: new Date(),
      historial: [{
        accion: 'Registro de usuario',
        fecha: new Date().toISOString(),
        detalle: 'Usuario registrado por primera vez.'
      }]
    });

    this.handleRegistrationSuccess();
  } catch (error: any) {
    this.handleRegistrationError(error);
  } finally {
    this.submitting = false;
  }
}


  private passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const errors: ValidationErrors = {};
    
    if (value.length < 6) errors['minLength'] = true;
    if (!/[A-Z]/.test(value)) errors['uppercase'] = true;
    if (!/[0-9]/.test(value)) errors['number'] = true;
    if (!/[^A-Za-z0-9]/.test(value)) errors['symbol'] = true;
    
    return Object.keys(errors).length ? { passwordStrength: errors } : null;
  }

  private passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password && confirmPassword && password !== confirmPassword 
      ? { passwordMismatch: true } 
      : null;
  }

  async loginWithGoogle(): Promise<void> {
    this.firebaseErrorMessage = '';
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(this.auth, provider);
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      console.error('Error al iniciar sesión con Google:', error);
      this.firebaseErrorMessage = this.getFriendlyErrorMessage(error.code);
    }
  }

  async loginWithTwitter(): Promise<void> {
    this.firebaseErrorMessage = '';
    const provider = new TwitterAuthProvider();
  
    try {
      await signInWithPopup(this.auth, provider);
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      console.error('Error al iniciar sesión con Twitter:', error);
      this.firebaseErrorMessage = this.getFriendlyErrorMessage(error.code);
    }
  }

  private handleRegistrationSuccess(): void {
    this.registerForm.reset();
    this.faceRegistered = false;
    this.router.navigate(['/dashboard']);
  }

  private handleRegistrationError(error: any): void {
    console.error('Firebase error:', error);
    this.firebaseErrorMessage = this.getFriendlyErrorMessage(error.code);
  }

  private getFriendlyErrorMessage(errorCode: string): string {
    const errorMap: { [key: string]: string } = {
      'auth/email-already-in-use': 'El correo electrónico ya está registrado',
      'auth/invalid-email': 'Formato de correo electrónico inválido',
      'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres',
      'auth/operation-not-allowed': 'Operación no permitida',
      'auth/too-many-requests': 'Demasiados intentos. Intenta de nuevo más tarde',
      'auth/popup-closed-by-user': 'Ventana cerrada antes de completar la autenticación',
      'auth/cancelled-popup-request': 'Ya hay una ventana emergente abierta',
      'auth/user-disabled': 'Esta cuenta ha sido deshabilitada',
      'auth/user-not-found': 'No existe una cuenta con este correo electrónico',
      'auth/wrong-password': 'Contraseña incorrecta',
      'auth/invalid-credential': 'Credenciales inválidas',
      'auth/account-exists-with-different-credential': 'Ya existe una cuenta con el mismo correo'
    };
    
    return errorMap[errorCode] || 'Error desconocido. Por favor, inténtalo de nuevo';
  }

  private setupPasswordStrengthListener(): void {
    this.registerForm.get('password')?.valueChanges.subscribe(pw => {
      const score = this.calculatePasswordStrength(pw);
      this.updateStrengthIndicator(score, pw);
    });
  }

  private calculatePasswordStrength(pw: string): number {
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score;
  }

  private updateStrengthIndicator(score: number, pw: string): void {
    const levels = [
      { text: 'Muy débil', percent: '25%', cls: 'bg-danger' },
      { text: 'Débil', percent: '50%', cls: 'bg-warning' },
      { text: 'Media', percent: '75%', cls: 'bg-info' },
      { text: 'Fuerte', percent: '100%', cls: 'bg-success' }
    ];
    
    if (pw) {
      const level = levels[Math.max(0, Math.min(score - 1, levels.length - 1))];
      this.strengthText = level.text;
      this.strengthPercent = level.percent;
      this.strengthClass = level.cls;
    } else {
      this.resetStrengthIndicator();
    }
  }

  private resetStrengthIndicator(): void {
    this.strengthText = '';
    this.strengthPercent = '0%';
    this.strengthClass = '';
  }

  ngOnDestroy(): void {
    this.stopCamera();
  }
}