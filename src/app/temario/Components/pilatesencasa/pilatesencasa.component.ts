import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pilatesencasa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../Componentecatalogogeneral.html',
  styleUrl: '../estilocssgeneral.css'
})
export class PilatesencasaComponent {
  itemsState = [
    {
      title: 'Tema 1: Introducción al Pilates en Casa',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Beneficios del Pilates', link: '/camera', isOpen: false },
        { name: 'Posiciones básicas para empezar', link: '/actividad-2', isOpen: false },
        { name: 'Consejos para la práctica en casa', link: '/actividad-3', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Rutinas de Pilates en Casa',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Rutina de ejercicios para el core', link: '/actividad-4', isOpen: false },
        { name: 'Rutina para mejorar la flexibilidad', link: '/actividad-5', isOpen: false },
        { name: 'Estiramientos y relajación post-entrenamiento', link: '/actividad-6', isOpen: false }
      ]
    }
  ];

  // Toggle the accordion item (Tema 1, Tema 2)
  toggle(index: number): void {
    this.itemsState[index].isOpen = !this.itemsState[index].isOpen;
  }

  // Toggle individual activity visibility
  toggleActivity(index: number, activityIndex: number): void {
    this.itemsState[index].activities[activityIndex].isOpen = !this.itemsState[index].activities[activityIndex].isOpen;
  }
}
