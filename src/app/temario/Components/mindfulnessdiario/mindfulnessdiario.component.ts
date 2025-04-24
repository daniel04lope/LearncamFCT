import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mindfulnessdiario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../Componentecatalogogeneral.html',
  styleUrl: '../estilocssgeneral.css'
})
export class MindfulnessdiarioComponent {
  itemsState = [
    {
      title: 'Tema 1: Prácticas Diarias de Atención Plena',
      isOpen: false,
      activities: [
        { name: 'Rutina matutina de mindfulness', link: '/camera', isOpen: false },
        { name: 'Pausa consciente en el trabajo', link: '/actividad-2', isOpen: false },
        { name: 'Mindfulness durante comidas', link: '/actividad-3', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Herramientas para el Autoconocimiento',
      isOpen: false,
      activities: [
        { name: 'Diario de emociones conscientes', link: '/actividad-4', isOpen: false },
        { name: 'Práctica de la compasión hacia uno mismo', link: '/actividad-5', isOpen: false },
        { name: 'Cierre del día con gratitud y reflexión', link: '/actividad-6', isOpen: false }
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
