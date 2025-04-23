import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bailedeportivo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bailedeportivo.component.html',
  styleUrl: './bailedeportivo.component.css'
})
export class BailedeportivoComponent {
  itemsState = [
    {
      title: 'Tema 1: Técnica Básica de Baile Deportivo',
      isOpen: false,
      activities: [
        { name: 'Postura y alineación corporal', link: '/camera', isOpen: false },
        { name: 'Desplazamientos básicos', link: '/camera', isOpen: false },
        { name: 'Trabajo de pies y brazos', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Ritmos Latinos',
      isOpen: false,
      activities: [
        { name: 'Cha-cha-chá básico', link: '/camera', isOpen: false },
        { name: 'Samba en pareja', link: '/camera', isOpen: false },
        { name: 'Rumba y expresión corporal', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Ritmos Standard',
      isOpen: false,
      activities: [
        { name: 'Vals inglés', link: '/camera', isOpen: false },
        { name: 'Tango internacional', link: '/camera', isOpen: false },
        { name: 'Quickstep', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 4: Práctica Coreográfica y Musicalidad',
      isOpen: false,
      activities: [
        { name: 'Montaje coreográfico', link: '/camera', isOpen: false },
        { name: 'Interpretación musical', link: '/camera', isOpen: false },
        { name: 'Práctica con pareja', link: '/camera', isOpen: false }
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
