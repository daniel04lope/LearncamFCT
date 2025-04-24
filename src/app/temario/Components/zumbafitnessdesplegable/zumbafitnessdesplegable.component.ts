import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-zumbafitnessdesplegable',
  standalone: true,
  imports: [CommonModule],
   templateUrl: '../Componentecatalogogeneral.html',
  styleUrl: '../estilocssgeneral.css'
})
export class ZumbafitnessdesplegableComponent {
  itemsState = [
    {
      title: 'Tema 1: Calentamiento y Ritmo Básico',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Actividad 1: Calentamiento General', link: '/camera', isOpen: false },
        { name: 'Actividad 2: Ritmo Básico de Zumba', link: '/actividad-2', isOpen: false },
        { name: 'Actividad 3: Movimientos de Base', link: '/actividad-3', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Coreografía de Zumba',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Actividad 4: Coreografía 1 - Paso a Paso', link: '/actividad-4', isOpen: false },
        { name: 'Actividad 5: Coreografía 2 - Paso a Paso', link: '/actividad-5', isOpen: false },
        { name: 'Actividad 6: Coreografía 3 - Paso a Paso', link: '/actividad-6', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Enfriamiento y Estiramientos',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Actividad 7: Estiramientos Generales', link: '/actividad-7', isOpen: false },
        { name: 'Actividad 8: Relajación y Respiración', link: '/actividad-8', isOpen: false },
        { name: 'Actividad 9: Estiramientos Musculares Específicos', link: '/actividad-9', isOpen: false }
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
