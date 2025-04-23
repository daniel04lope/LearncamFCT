import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-taichibasico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taichibasico.component.html',
  styleUrl: './taichibasico.component.css'
})
export class TaichibasicoComponent {
  itemsState = [
    {
      title: 'Tema 1: Fundamentos del Tai Chi',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: '¿Qué es el Tai Chi?', link: '/camera', isOpen: false },
        { name: 'Beneficios del Tai Chi', link: '/actividad-2', isOpen: false },
        { name: 'Los principios básicos del Tai Chi', link: '/actividad-3', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Movimientos básicos del Tai Chi',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Movimiento 1: La postura inicial', link: '/actividad-4', isOpen: false },
        { name: 'Movimiento 2: El paso de avance', link: '/actividad-5', isOpen: false },
        { name: 'Movimiento 3: La postura de la grulla', link: '/actividad-6', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Consejos para mejorar tu práctica',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Respiración en Tai Chi', link: '/actividad-7', isOpen: false },
        { name: 'Cómo mejorar la concentración', link: '/actividad-8', isOpen: false },
        { name: 'Evitar lesiones al practicar Tai Chi', link: '/actividad-9', isOpen: false }
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
