import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bodycombatcomponent',
  standalone: true,
  imports: [CommonModule],
   templateUrl: '../Componentecatalogogeneral.html',
  styleUrl: '../estilocssgeneral.css'
})
export class BodycombatcomponentComponent {
  itemsState = [
    {
      title: 'Tema 1: Técnica y Fundamentos',
      isOpen: false,
      activities: [
        { name: 'Postura de guardia y desplazamiento', link: '/camera', isOpen: false },
        { name: 'Golpes de puño: jab, cross y uppercut', link: '/camera', isOpen: false },
        { name: 'Patadas básicas: frontal y lateral', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Combos y Cardio de Impacto',
      isOpen: false,
      activities: [
        { name: 'Combinaciones de puño y patada', link: '/camera', isOpen: false },
        { name: 'Bloques y defensas en movimiento', link: '/camera', isOpen: false },
        { name: 'Circuito cardiovascular explosivo', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Fuerza Funcional y Core',
      isOpen: false,
      activities: [
        { name: 'Flexiones con técnica de combate', link: '/camera', isOpen: false },
        { name: 'Trabajo abdominal con impacto', link: '/camera', isOpen: false },
        { name: 'Burpees y ejercicios pliométricos', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 4: Vuelta a la Calma y Estiramientos',
      isOpen: false,
      activities: [
        { name: 'Respiración y relajación muscular', link: '/camera', isOpen: false },
        { name: 'Estiramientos específicos de combate', link: '/camera', isOpen: false },
        { name: 'Mindfulness post-entrenamiento', link: '/camera', isOpen: false }
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
