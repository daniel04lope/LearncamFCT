import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movilidadarticular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../Componentecatalogogeneral.html',
  styleUrl: '../estilocssgeneral.css'
})
export class MovilidadarticularComponent {
  itemsState = [
    {
      title: 'Tema 1: Fundamentos de Movilidad Articular',
      isOpen: false,
      activities: [
        { name: 'Exploración de rango articular', link: '/camera', isOpen: false },
        { name: 'Ejercicios básicos de movilidad', link: '/actividad-2', isOpen: false },
        { name: 'Evaluación de postura y alineación', link: '/actividad-3', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Rutinas Dinámicas y Prevención de Lesiones',
      isOpen: false,
      activities: [
        { name: 'Movilidad para caderas y hombros', link: '/actividad-4', isOpen: false },
        { name: 'Rutina pre-entrenamiento funcional', link: '/actividad-5', isOpen: false },
        { name: 'Desbloqueo articular y control motor', link: '/actividad-6', isOpen: false }
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
