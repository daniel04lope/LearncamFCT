import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabataexpress',
  standalone: true,
  imports: [CommonModule],
   templateUrl: '../Componentecatalogogeneral.html',
  styleUrl: '../estilocssgeneral.css'
})
export class TabataexpressComponent {
  itemsState = [
    {
      title: 'Tema 1: Introducción al entrenamiento Tabata',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: '¿Qué es el Tabata?', link: '/camera', isOpen: false },
        { name: 'Beneficios del entrenamiento Tabata', link: '/actividad-2', isOpen: false },
        { name: 'Principios del entrenamiento Tabata', link: '/actividad-3', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Ejercicios de Tabata Express',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Ejercicio 1: Jumping Jacks', link: '/actividad-4', isOpen: false },
        { name: 'Ejercicio 2: Flexiones de brazos', link: '/actividad-5', isOpen: false },
        { name: 'Ejercicio 3: Sentadillas', link: '/actividad-6', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Consejos para un Tabata eficaz',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Cómo mantener la intensidad', link: '/actividad-7', isOpen: false },
        { name: 'Importancia del calentamiento', link: '/actividad-8', isOpen: false },
        { name: 'Recuperación entre series', link: '/actividad-9', isOpen: false }
      ]
    }
  ];

  // Toggle the accordion item (Tema 1, Tema 2, Tema 3)
  toggle(index: number): void {
    this.itemsState[index].isOpen = !this.itemsState[index].isOpen;
  }

  // Toggle individual activity visibility
  toggleActivity(index: number, activityIndex: number): void {
    this.itemsState[index].activities[activityIndex].isOpen = !this.itemsState[index].activities[activityIndex].isOpen;
  }
}
