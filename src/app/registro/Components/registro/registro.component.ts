import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  strengthText = '';
  strengthPercent = '0%';
  strengthClass = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordStrengthValidator]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    }, { validators: this.passwordsMatchValidator });

    // Actualizar indicador de fuerza
    this.registerForm.get('password')!.valueChanges.subscribe(pw => {
      const score = this.calculateStrength(pw);
      const levels = [
        { text: 'Muy débil',   percent: '25%',  cls: 'bg-danger'  },
        { text: 'Débil',        percent: '50%',  cls: 'bg-warning' },
        { text: 'Media',        percent: '75%',  cls: 'bg-info'    },
        { text: 'Fuerte',       percent: '100%', cls: 'bg-success' }
      ];
      if (pw) {
        const lvl = levels[Math.max(0, Math.min(score - 1, levels.length - 1))];
        this.strengthText = lvl.text;
        this.strengthPercent = lvl.percent;
        this.strengthClass = lvl.cls;
      } else {
        this.strengthText = '';
        this.strengthPercent = '0%';
        this.strengthClass = '';
      }
    });
  }

  // Custom validator: mayúsculas, número, símbolo y mínimo 8 caracteres
  passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const pw: string = control.value || '';
    const errors: any = {};
    if (pw.length < 8)                 errors.minLength = true;
    if (!/[A-Z]/.test(pw))             errors.uppercase = true;
    if (!/[0-9]/.test(pw))             errors.number = true;
    if (!/[^A-Za-z0-9]/.test(pw))      errors.symbol = true;
    return Object.keys(errors).length ? { passwordStrength: errors } : null;
  }

  // Custom validator a nivel de formulario para confirmar contraseñas
  passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const pw = group.get('password')!.value;
    const cpw = group.get('confirmPassword')!.value;
    return pw && cpw && pw !== cpw ? { passwordMismatch: true } : null;
  }

  // Puntuación simple: +1 por cada criterio
  private calculateStrength(pw: string): number {
    let score = 0;
    if (pw.length >= 8)    score++;
    if (/[A-Z]/.test(pw))  score++;
    if (/[0-9]/.test(pw))  score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score;
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    console.log('Formulario válido, datos:', this.registerForm.value);
    // Aquí iría la llamada a tu servicio de registro…
  }
}