import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-kickboxingfitness',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kickboxingfitness.component.html',
  styleUrl: './kickboxingfitness.component.css'
})
export class KickboxingfitnessComponent {
  itemsState = [
    {
      title: 'Tema 1: Fundamentos del Kickboxing Fitness',
      isOpen: false,
      activities: [
        { name: 'Postura básica y guardia defensiva', link: '/camera', isOpen: false },
        { name: 'Técnicas de puño: jab, cross, uppercut, hook', link: '/camera', isOpen: false },
        { name: 'Técnicas de pierna: front kick y roundhouse', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Condición Física y Cardio con Kickboxing',
      isOpen: false,
      activities: [
        { name: 'Cardioboxing con combinaciones básicas', link: '/camera', isOpen: false },
        { name: 'Circuito de fuerza + kickboxing', link: '/camera', isOpen: false },
        { name: 'Entrenamiento de agilidad y coordinación', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Rutinas Completas y Cierre',
      isOpen: false,
      activities: [
        { name: 'Core & abdomen con técnica de combate', link: '/camera', isOpen: false },
        { name: 'Sesión HIIT estilo kickboxing', link: '/camera', isOpen: false },
        { name: 'Estiramientos activos y respiración boxeadora', link: '/camera', isOpen: false }
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
