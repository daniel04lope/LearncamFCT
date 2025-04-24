import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gimnasiasuave',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../Componentecatalogogeneral.html',
  styleUrl: '../estilocssgeneral.css'
})
export class GimnasiasuaveComponent {
  itemsState = [
    {
      title: 'Tema 1: Fundamentos de la Gimnasia Suave',
      isOpen: false,
      activities: [
        { name: 'Presentación y beneficios de la gimnasia suave', link: '/camera', isOpen: false },
        { name: 'Precauciones y adaptación del ejercicio', link: '/camera', isOpen: false },
        { name: 'Respiración consciente y controlada', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Rutinas de Movimiento Suave',
      isOpen: false,
      activities: [
        { name: 'Movilidad articular desde casa', link: '/camera', isOpen: false },
        { name: 'Estiramientos suaves para el cuerpo completo', link: '/camera', isOpen: false },
        { name: 'Ejercicios de pie y en silla para todos los niveles', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Cierre y Relajación',
      isOpen: false,
      activities: [
        { name: 'Secuencia de relajación corporal', link: '/camera', isOpen: false },
        { name: 'Meditación guiada para después del ejercicio', link: '/camera', isOpen: false },
        { name: 'Consejos para mantener una práctica constante', link: '/camera', isOpen: false }
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
