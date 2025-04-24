import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-entrenamientofuncional',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../Componentecatalogogeneral.html',
  styleUrl: '../estilocssgeneral.css'
})
export class EntrenamientofuncionalComponent {
  itemsState = [
    {
      title: 'Tema 1: Introducción al Entrenamiento Funcional',
      isOpen: false,
      activities: [
        { name: '¿Qué es el entrenamiento funcional?', link: '/camera', isOpen: false },
        { name: 'Beneficios para la salud y el rendimiento', link: '/camera', isOpen: false },
        { name: 'Fundamentos y principios básicos', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Movimientos Funcionales Básicos',
      isOpen: false,
      activities: [
        { name: 'Sentadillas y su técnica', link: '/camera', isOpen: false },
        { name: 'Flexiones de brazo adaptadas', link: '/camera', isOpen: false },
        { name: 'Peso muerto funcional', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Combinación de Movimientos',
      isOpen: false,
      activities: [
        { name: 'Circuitos funcionales básicos', link: '/camera', isOpen: false },
        { name: 'Ejercicios de cuerpo completo', link: '/camera', isOpen: false },
        { name: 'Trabajo cardiovascular funcional', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 4: Programación del Entrenamiento Funcional',
      isOpen: false,
      activities: [
        { name: 'Diseño de rutinas funcionales', link: '/camera', isOpen: false },
        { name: 'Modificaciones para diferentes niveles', link: '/camera', isOpen: false },
        { name: 'Adaptación según objetivos', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 5: Recuperación y Prevención de Lesiones',
      isOpen: false,
      activities: [
        { name: 'Estiramientos y movilidad', link: '/camera', isOpen: false },
        { name: 'Técnicas de recuperación', link: '/camera', isOpen: false },
        { name: 'Prevención de lesiones comunes', link: '/camera', isOpen: false }
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
