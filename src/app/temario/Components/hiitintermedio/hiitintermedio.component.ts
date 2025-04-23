import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hiitintermedio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hiitintermedio.component.html',
  styleUrl: './hiitintermedio.component.css'
})
export class HiitintermedioComponent {
  itemsState = [
    {
      title: 'Tema 1: Fundamentos y Técnica',
      isOpen: false,
      activities: [
        { name: 'Qué es el HIIT y cómo hacerlo bien', link: '/camera', isOpen: false },
        { name: 'Calentamiento dinámico para evitar lesiones', link: '/camera', isOpen: false },
        { name: 'Técnica de ejercicios clave (burpees, jumping jacks, mountain climbers)', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Entrenamientos HIIT Intermedios',
      isOpen: false,
      activities: [
        { name: 'Circuito 1: 20/10 con ejercicios de fuerza y cardio', link: '/camera', isOpen: false },
        { name: 'Circuito 2: Tabata para zona media y tren inferior', link: '/camera', isOpen: false },
        { name: 'Enfriamiento y estiramiento final', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Consejos y Progresión',
      isOpen: false,
      activities: [
        { name: 'Cómo progresar sin agotarte ni lesionarte', link: '/camera', isOpen: false },
        { name: 'Adaptaciones para distintos niveles de resistencia', link: '/camera', isOpen: false },
        { name: 'Frecuencia y combinación con otros entrenamientos', link: '/camera', isOpen: false }
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
