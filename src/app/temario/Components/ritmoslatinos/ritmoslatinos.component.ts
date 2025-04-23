import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ritmoslatinos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ritmoslatinos.component.html',
  styleUrl: './ritmoslatinos.component.css'
})
export class RitmoslatinosComponent {
  itemsState = [
    {
      title: 'Tema 1: Introducción a los Ritmos Latinos',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Historia de los Ritmos Latinos', link: '/camera', isOpen: false },
        { name: 'Diferentes estilos de Ritmos Latinos', link: '/actividad-2', isOpen: false },
        { name: 'Cómo empezar a bailar Ritmos Latinos', link: '/actividad-3', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Ritmos Latinos Populares',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Salsa', link: '/actividad-4', isOpen: false },
        { name: 'Bachata', link: '/actividad-5', isOpen: false },
        { name: 'Reggaeton', link: '/actividad-6', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Técnicas y Consejos de Baile',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Movimiento básico de Salsa', link: '/actividad-7', isOpen: false },
        { name: 'Cómo mejorar la coordinación', link: '/actividad-8', isOpen: false },
        { name: 'Tips para bailar Reggaeton', link: '/actividad-9', isOpen: false }
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
