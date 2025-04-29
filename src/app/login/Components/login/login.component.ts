import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  passwordStrength: 'Débil' | 'Media' | 'Fuerte' | '-' = '-';

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

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Formulario válido:', this.loginForm.value);
      // Lógica de envío...
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
