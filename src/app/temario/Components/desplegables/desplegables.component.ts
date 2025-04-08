import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-desplegables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desplegables.component.html',
  styleUrl: './desplegables.component.css'
})
export class DesplegablesComponent {
  itemsState = [
    {
      title: 'Tema 1: TÍTULO DEL TEMA',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Nombre de la actividad', isOpen: false },
        { name: 'Nombre de la actividad', isOpen: false },
        { name: 'Nombre de la actividad', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: TÍTULO DEL TEMA',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Nombre de la actividad', isOpen: false },
        { name: 'Nombre de la actividad', isOpen: false },
        { name: 'Nombre de la actividad', isOpen: false }
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
