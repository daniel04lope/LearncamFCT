import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cross-fit-adaptado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../Componentecatalogogeneral.html',
  styleUrl: '../estilocssgeneral.css'
})
export class CrossFitAdaptadoComponent {
  itemsState = [
    {
      title: 'Tema 1: Introducción al CrossFit Adaptado',
      isOpen: false,
      activities: [
        { name: 'Qué es el CrossFit adaptado', link: '/camera', isOpen: false },
        { name: 'Evaluación inicial y niveles de movilidad', link: '/camera', isOpen: false },
        { name: 'Calentamiento con movilidad asistida', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Fuerza Adaptada',
      isOpen: false,
      activities: [
        { name: 'Trabajo de tren superior con bandas', link: '/camera', isOpen: false },
        { name: 'Ejercicios de tracción adaptada', link: '/camera', isOpen: false },
        { name: 'Prensa con mancuernas o peso corporal', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Resistencia y Metcon Modificado',
      isOpen: false,
      activities: [
        { name: 'EMOM adaptado con ejercicios funcionales', link: '/camera', isOpen: false },
        { name: 'AMRAP con modificaciones según capacidades', link: '/camera', isOpen: false },
        { name: 'Circuito de bajo impacto', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 4: Core y Control Corporal',
      isOpen: false,
      activities: [
        { name: 'Trabajo de core en silla o colchoneta', link: '/camera', isOpen: false },
        { name: 'Plancha con apoyo asistido', link: '/camera', isOpen: false },
        { name: 'Equilibrio y propiocepción adaptada', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 5: Recuperación y Prevención de Lesiones',
      isOpen: false,
      activities: [
        { name: 'Estiramientos adaptados', link: '/camera', isOpen: false },
        { name: 'Técnicas de relajación y respiración', link: '/camera', isOpen: false },
        { name: 'Recomendaciones de fisioterapia preventiva', link: '/camera', isOpen: false }
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
