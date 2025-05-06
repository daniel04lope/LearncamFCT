import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider, UserCredential } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private auth: Auth = inject(Auth);
  private router = inject(Router);
  loginForm: FormGroup;
  passwordStrength: 'Débil' | 'Media' | 'Fuerte' | '-' = '-';
  errorMessage: string | null = null;
  loading = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/)
      ]]
    });
  }

  async onSubmit(): Promise<void> {
    this.errorMessage = null;
    if (this.loginForm.valid) {
      this.loading = true;
      const { email, password } = this.loginForm.value;
      
      try {
        await signInWithEmailAndPassword(this.auth, email, password);
        this.router.navigate(['/dashboard']); // Redirige a la página principal
      } catch (error) {
        this.handleError(error);
      } finally {
        this.loading = false;
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  async signInWithGoogle(): Promise<void> {
    this.errorMessage = null;
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(this.auth, provider);
      this.router.navigate(['/dashboard']);
    } catch (error) {
      this.handleError(error);
    }
  }

  async signInWithTwitter(): Promise<void> {
    this.errorMessage = null;
    try {
      const provider = new TwitterAuthProvider();
      await signInWithPopup(this.auth, provider);
      this.router.navigate(['/dashboard']);
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any): void {
    console.error(error);
    switch (error.code) {
      case 'auth/invalid-email':
        this.errorMessage = 'Correo electrónico inválido';
        break;
      case 'auth/user-disabled':
        this.errorMessage = 'Usuario deshabilitado';
        break;
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        this.errorMessage = 'Correo o contraseña incorrectos';
        break;
      case 'auth/popup-closed-by-user':
        this.errorMessage = 'El popup de autenticación fue cerrado';
        break;
      default:
        this.errorMessage = 'Error al iniciar sesión. Intenta nuevamente.';
        break;
    }
  }

  onPasswordInput(): void {
    const password = this.loginForm.get('password')?.value || '';
    this.passwordStrength = this.calculatePasswordStrength(password);
  }

  calculatePasswordStrength(password: string): 'Débil' | 'Media' | 'Fuerte' | '-' {
    if (!password) return '-';

    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[\W_]/.test(password)) strength++;

    if (strength <= 2) return 'Débil';
    if (strength === 3 || strength === 4) return 'Media';
    return 'Fuerte';
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}