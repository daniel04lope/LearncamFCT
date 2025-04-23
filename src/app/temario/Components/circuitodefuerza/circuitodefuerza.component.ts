import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-circuitodefuerza',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './circuitodefuerza.component.html',
  styleUrl: './circuitodefuerza.component.css'
})
export class CircuitodefuerzaComponent {
  itemsState = [
    {
      title: 'Tema 1: Fundamentos del Entrenamiento de Fuerza',
      isOpen: false,
      activities: [
        { name: 'Introducción al circuito de fuerza', link: '/camera', isOpen: false },
        { name: 'Evaluación del estado físico inicial', link: '/camera', isOpen: false },
        { name: 'Calentamiento funcional y movilidad articular', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Circuito de Tren Superior',
      isOpen: false,
      activities: [
        { name: 'Flexiones y variantes', link: '/camera', isOpen: false },
        { name: 'Remo con peso corporal', link: '/camera', isOpen: false },
        { name: 'Trabajo de hombros y tríceps', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Circuito de Tren Inferior',
      isOpen: false,
      activities: [
        { name: 'Sentadillas y zancadas', link: '/camera', isOpen: false },
        { name: 'Puente de glúteos', link: '/camera', isOpen: false },
        { name: 'Saltos pliométricos', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 4: Núcleo y Estabilidad',
      isOpen: false,
      activities: [
        { name: 'Plancha y variantes', link: '/camera', isOpen: false },
        { name: 'Trabajo abdominal funcional', link: '/camera', isOpen: false },
        { name: 'Ejercicios con balón medicinal', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 5: Enfriamiento y Recuperación',
      isOpen: false,
      activities: [
        { name: 'Estiramientos guiados', link: '/camera', isOpen: false },
        { name: 'Técnicas de respiración consciente', link: '/camera', isOpen: false },
        { name: 'Prevención de lesiones y autocuidado', link: '/camera', isOpen: false }
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
