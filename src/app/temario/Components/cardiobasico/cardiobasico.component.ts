import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cardiobasico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardiobasico.component.html',
  styleUrl: './cardiobasico.component.css'
})
export class CardiobasicoComponent {
  itemsState = [
    {
      title: 'Tema 1: Activación y Movilidad Inicial',
      isOpen: false,
      activities: [
        { name: 'Marcha en el sitio', link: '/camera', isOpen: false },
        { name: 'Movilidad de hombros y caderas', link: '/camera', isOpen: false },
        { name: 'Estiramientos dinámicos', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Cardio de Bajo Impacto',
      isOpen: false,
      activities: [
        { name: 'Pasos básicos laterales', link: '/camera', isOpen: false },
        { name: 'Rodillas arriba suaves', link: '/camera', isOpen: false },
        { name: 'Combinaciones lentas con música', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Cardio de Intensidad Moderada',
      isOpen: false,
      activities: [
        { name: 'Jumping jacks controlados', link: '/camera', isOpen: false },
        { name: 'Trote suave en el sitio', link: '/camera', isOpen: false },
        { name: 'Secuencia continua con brazos y piernas', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 4: Vuelta a la Calma y Estiramientos',
      isOpen: false,
      activities: [
        { name: 'Movimientos suaves con respiración', link: '/camera', isOpen: false },
        { name: 'Estiramientos de piernas y espalda', link: '/camera', isOpen: false },
        { name: 'Relajación final', link: '/camera', isOpen: false }
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
