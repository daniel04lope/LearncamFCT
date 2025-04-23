import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-meditacionyrespiracion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meditacionyrespiracion.component.html',
  styleUrl: './meditacionyrespiracion.component.css'
})
export class MeditacionyrespiracionComponent {
  itemsState = [
    {
      title: 'Tema 1: Fundamentos de la Meditación',
      isOpen: false,
      activities: [
        { name: 'Introducción a la meditación consciente', link: '/camera', isOpen: false },
        { name: 'Posturas y ambientes ideales para meditar', link: '/actividad-2', isOpen: false },
        { name: 'Práctica guiada: Escaneo corporal', link: '/actividad-3', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Respiración y Relajación',
      isOpen: false,
      activities: [
        { name: 'Técnicas de respiración diafragmática', link: '/actividad-4', isOpen: false },
        { name: 'Respiración cuadrada para calmar la mente', link: '/actividad-5', isOpen: false },
        { name: 'Sesión guiada de respiración + visualización', link: '/actividad-6', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Integración y Hábitos Diarios',
      isOpen: false,
      activities: [
        { name: 'Cómo crear una rutina diaria de meditación', link: '/actividad-7', isOpen: false },
        { name: 'Meditación activa en movimiento', link: '/actividad-8', isOpen: false },
        { name: 'Cierre: Gratitud y respiración consciente', link: '/actividad-9', isOpen: false }
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
