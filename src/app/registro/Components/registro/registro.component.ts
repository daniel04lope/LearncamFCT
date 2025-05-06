import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { 
  AbstractControl, 
  FormBuilder, 
  FormGroup, 
  ReactiveFormsModule, 
  ValidationErrors, 
  Validators 
} from '@angular/forms';
import { createUserWithEmailAndPassword, updateProfile, getAuth, GoogleAuthProvider, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegisterComponent implements OnInit {
  private auth = inject(Auth); 
  private router = inject(Router);
  private fb = inject(FormBuilder);

  registerForm!: FormGroup;
  strengthText = '';
  strengthPercent = '0%';
  strengthClass = '';
  firebaseErrorMessage = '';
  submitting = false;

  ngOnInit(): void {
    this.initForm();
    this.setupPasswordStrengthListener();
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

  private passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const errors: ValidationErrors = {};
    
    if (value.length < 8) errors['minLength'] = true;
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

  async onSubmit(): Promise<void> {
    if (this.registerForm.invalid || this.submitting) return;
    
    this.submitting = true;
    this.firebaseErrorMessage = '';
    
    const { name, email, password } = this.registerForm.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      
      await updateProfile(userCredential.user, { displayName: name });
      this.handleRegistrationSuccess();
    } catch (error: any) {
      this.handleRegistrationError(error);
    } finally {
      this.submitting = false;
    }
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

  private handleRegistrationSuccess(): void {
    this.registerForm.reset();
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
      'auth/too-many-requests': 'Demasiados intentos. Por favor, inténtalo de nuevo más tarde',
      'auth/popup-closed-by-user': 'Ventana cerrada antes de completar la autenticación',
      'auth/cancelled-popup-request': 'Ya hay una ventana emergente abierta',
    };
    
    return errorMap[errorCode] || 'Error desconocido. Por favor, inténtalo de nuevo';
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
  
}
