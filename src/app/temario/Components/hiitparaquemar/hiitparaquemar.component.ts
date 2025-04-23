import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hiitparaquemar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hiitparaquemar.component.html',
  styleUrl: './hiitparaquemar.component.css'
})
export class HiitparaquemarComponent {
  itemsState = [
    {
      title: 'Tema 1: Preparación para el HIIT de Quema de Grasa',
      isOpen: false,
      activities: [
        { name: 'Introducción al HIIT para pérdida de grasa', link: '/camera', isOpen: false },
        { name: 'Evaluación inicial: estado físico y objetivos', link: '/camera', isOpen: false },
        { name: 'Rutina de calentamiento y activación', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Circuitos HIIT de Alta Quema Calórica',
      isOpen: false,
      activities: [
        { name: 'Circuito explosivo 30/30 full body', link: '/camera', isOpen: false },
        { name: 'HIIT en intervalos descendentes (piramidal)', link: '/camera', isOpen: false },
        { name: 'Sprints y ejercicios metabólicos', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Control del Progreso y Recuperación',
      isOpen: false,
      activities: [
        { name: 'Seguimiento de resultados: medidas, peso, energía', link: '/camera', isOpen: false },
        { name: 'Errores comunes que frenan la quema de grasa', link: '/camera', isOpen: false },
        { name: 'Enfriamiento y respiración post-HIIT', link: '/camera', isOpen: false }
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
