import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-yogaparaprincipiantes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './yogaparaprincipiantes.component.html',
  styleUrl: './yogaparaprincipiantes.component.css'
})
export class YogaparaprincipiantesComponent {
  itemsState = [
    {
      title: 'Tema 1: TÍTULO DEL TEMA',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Actividad 1', link: '/camera', isOpen: false },
        { name: 'Actividad 2', link: '/actividad-2', isOpen: false },
        { name: 'Actividad 3', link: '/actividad-3', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: TÍTULO DEL TEMA',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Actividad 4', link: '/actividad-4', isOpen: false },
        { name: 'Actividad 5', link: '/actividad-5', isOpen: false },
        { name: 'Actividad 6', link: '/actividad-6', isOpen: false }
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
