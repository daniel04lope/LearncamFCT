import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-yogaavanzado',
  standalone: true,
  imports: [CommonModule],
   templateUrl: '../Componentecatalogogeneral.html',
  styleUrl: '../estilocssgeneral.css'
})
export class YogaavanzadoComponent {
  itemsState = [
    {
      title: 'Tema 1: Posturas Avanzadas',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Postura 1: Sirsasana (Parada de cabeza)', link: '/camera', isOpen: false },
        { name: 'Postura 2: Bakasana (Postura del cuervo)', link: '/actividad-2', isOpen: false },
        { name: 'Postura 3: Eka Pada Koundinyasana', link: '/actividad-3', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Técnicas Avanzadas de Respiración',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Técnica 1: Ujjayi Pranayama', link: '/actividad-4', isOpen: false },
        { name: 'Técnica 2: Kapalbhati', link: '/actividad-5', isOpen: false },
        { name: 'Técnica 3: Nadi Shodhana', link: '/actividad-6', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Integración de Yoga y Meditación',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Meditación guiada: Conexión cuerpo-mente', link: '/actividad-7', isOpen: false },
        { name: 'Meditación avanzada: Tratak', link: '/actividad-8', isOpen: false },
        { name: 'Cómo mantener la calma durante la práctica', link: '/actividad-9', isOpen: false }
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
