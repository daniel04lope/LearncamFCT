import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crossfitpaprincipiantes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crossfitpaprincipiantes.component.html',
  styleUrl: './crossfitpaprincipiantes.component.css'
})
export class CrossfitpaprincipiantesComponent {
  itemsState = [
    {
      title: 'Tema 1: Fundamentos del CrossFit',
      isOpen: false,
      activities: [
        { name: '¿Qué es el CrossFit?', link: '/camera', isOpen: false },
        { name: 'Principios del entrenamiento funcional', link: '/camera', isOpen: false },
        { name: 'Preparación física básica', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Movimientos Básicos',
      isOpen: false,
      activities: [
        { name: 'Sentadillas (Air Squat)', link: '/camera', isOpen: false },
        { name: 'Flexiones (Push-up) adaptadas', link: '/camera', isOpen: false },
        { name: 'Peso muerto (Deadlift) con técnica', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Estructura del Entrenamiento',
      isOpen: false,
      activities: [
        { name: 'Calentamiento y movilidad inicial', link: '/camera', isOpen: false },
        { name: 'WOD para principiantes', link: '/camera', isOpen: false },
        { name: 'Enfriamiento y estiramientos', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 4: Seguridad y Prevención',
      isOpen: false,
      activities: [
        { name: 'Errores comunes en principiantes', link: '/camera', isOpen: false },
        { name: 'Prevención de lesiones', link: '/camera', isOpen: false },
        { name: 'Importancia de la progresión', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 5: Nutrición y Hábitos Saludables',
      isOpen: false,
      activities: [
        { name: 'Alimentación para rendimiento', link: '/camera', isOpen: false },
        { name: 'Hidratación y descanso', link: '/camera', isOpen: false },
        { name: 'Rutinas sostenibles para novatos', link: '/camera', isOpen: false }
      ]
    }
  ];

  toggle(index: number): void {
    this.itemsState[index].isOpen = !this.itemsState[index].isOpen;
  }

  toggleActivity(index: number, activityIndex: number): void {
    this.itemsState[index].activities[activityIndex].isOpen = !this.itemsState[index].activities[activityIndex].isOpen;
  }
}
