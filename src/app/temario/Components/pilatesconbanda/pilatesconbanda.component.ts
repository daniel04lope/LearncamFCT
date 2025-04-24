import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pilatesconbanda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../Componentecatalogogeneral.html',
  styleUrl: '../estilocssgeneral.css'
})
export class PilatesconbandaComponent {
  itemsState = [
    {
      title: 'Tema 1: Introducción al Pilates con Banda',
      isOpen: false,
      activities: [
        { name: 'Fundamentos del Pilates con Banda', link: '/camera', isOpen: false },
        { name: 'Ejercicios de respiración y alineación', link: '/actividad-2', isOpen: false },
        { name: 'Técnicas de activación muscular', link: '/actividad-3', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Rutinas con Banda para Cuerpo Completo',
      isOpen: false,
      activities: [
        { name: 'Ejercicios para la parte superior del cuerpo', link: '/actividad-4', isOpen: false },
        { name: 'Ejercicios para piernas y glúteos', link: '/actividad-5', isOpen: false },
        { name: 'Estiramientos y relajación', link: '/actividad-6', isOpen: false }
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
