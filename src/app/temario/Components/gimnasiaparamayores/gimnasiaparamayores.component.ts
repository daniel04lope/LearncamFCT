import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gimnasiaparamayores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gimnasiaparamayores.component.html',
  styleUrl: './gimnasiaparamayores.component.css'
})
export class GimnasiaparamayoresComponent {
  itemsState = [
    {
      title: 'Tema 1: Ejercicio Físico Seguro para Mayores',
      isOpen: false,
      activities: [
        { name: 'Introducción a la actividad física en la tercera edad', link: '/camera', isOpen: false },
        { name: 'Precauciones y adaptaciones en el entrenamiento', link: '/camera', isOpen: false },
        { name: 'Ejercicios de bajo impacto', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Mejora de la Movilidad y la Fuerza',
      isOpen: false,
      activities: [
        { name: 'Ejercicios de fuerza con el propio peso corporal', link: '/camera', isOpen: false },
        { name: 'Entrenamiento de equilibrio y coordinación', link: '/camera', isOpen: false },
        { name: 'Estiramientos y relajación para mayores', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Rutinas Funcionales para la Vida Diaria',
      isOpen: false,
      activities: [
        { name: 'Ejercicios para mejorar la postura', link: '/camera', isOpen: false },
        { name: 'Movimientos funcionales cotidianos (sentarse, levantarse, alcanzar objetos)', link: '/camera', isOpen: false },
        { name: 'Rutinas sencillas para hacer en casa', link: '/camera', isOpen: false }
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
