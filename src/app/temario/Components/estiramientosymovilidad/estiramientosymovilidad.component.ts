import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-estiramientosymovilidad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estiramientosymovilidad.component.html',
  styleUrl: './estiramientosymovilidad.component.css'
})
export class EstiramientosymovilidadComponent {
  itemsState = [
    {
      title: 'Tema 1: Fundamentos del Estiramiento y la Movilidad',
      isOpen: false,
      activities: [
        { name: 'Importancia del estiramiento', link: '/camera', isOpen: false },
        { name: 'Tipos de estiramientos (estático, dinámico)', link: '/camera', isOpen: false },
        { name: 'Errores comunes en el estiramiento', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Movilidad Articular y Control Corporal',
      isOpen: false,
      activities: [
        { name: 'Ejercicios de movilidad de cadera y hombros', link: '/camera', isOpen: false },
        { name: 'Activaciones previas al entrenamiento', link: '/camera', isOpen: false },
        { name: 'Trabajo con foam roller y bandas elásticas', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Rutinas Prácticas',
      isOpen: false,
      activities: [
        { name: 'Rutina de estiramientos para después de entrenar', link: '/camera', isOpen: false },
        { name: 'Movilidad matutina para mejorar el rango articular', link: '/camera', isOpen: false },
        { name: 'Estiramientos para personas sedentarias', link: '/camera', isOpen: false }
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
