import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabatatraining',
  standalone: true,
  imports: [CommonModule],
   templateUrl: '../Componentecatalogogeneral.html',
  styleUrl: '../estilocssgeneral.css'
})
export class TabatatrainingComponent {
  itemsState = [
    {
      title: 'Tema 1: Fundamentos del entrenamiento Tabata',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: '¿Qué es Tabata?', link: '/camera', isOpen: false },
        { name: 'Beneficios del entrenamiento Tabata', link: '/actividad-2', isOpen: false },
        { name: 'Cómo realizar un entrenamiento Tabata', link: '/actividad-3', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Ejercicios Tabata',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Ejercicio 1: Sentadillas', link: '/actividad-4', isOpen: false },
        { name: 'Ejercicio 2: Flexiones de pecho', link: '/actividad-5', isOpen: false },
        { name: 'Ejercicio 3: Burpees', link: '/actividad-6', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Consejos para mejorar en Tabata',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Mantener la intensidad', link: '/actividad-7', isOpen: false },
        { name: 'Importancia de la técnica', link: '/actividad-8', isOpen: false },
        { name: 'Recuperación efectiva', link: '/actividad-9', isOpen: false }
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
