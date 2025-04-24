import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aerobicosclasicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../Componentecatalogogeneral.html',
  styleUrl: '../estilocssgeneral.css'
})
export class AerobicosclasicosComponent {
  itemsState = [
    {
      title: 'Tema 1: Calentamiento y Movilidad Articular',
      isOpen: false,
      activities: [
        { name: 'Marcha en el sitio', link: '/camera', isOpen: false },
        { name: 'Rotación de hombros y brazos', link: '/camera', isOpen: false },
        { name: 'Estiramientos dinámicos', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Rutinas Clásicas de Aeróbicos',
      isOpen: false,
      activities: [
        { name: 'Pasos básicos de aeróbicos', link: '/camera', isOpen: false },
        { name: 'Coreografía sencilla', link: '/camera', isOpen: false },
        { name: 'Combinaciones de alto impacto', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Fuerza Funcional y Estabilidad',
      isOpen: false,
      activities: [
        { name: 'Sentadillas y desplantes', link: '/camera', isOpen: false },
        { name: 'Trabajo de core', link: '/camera', isOpen: false },
        { name: 'Ejercicios de equilibrio', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 4: Enfriamiento y Relajación',
      isOpen: false,
      activities: [
        { name: 'Estiramientos estáticos', link: '/camera', isOpen: false },
        { name: 'Respiración consciente', link: '/camera', isOpen: false },
        { name: 'Relajación guiada', link: '/camera', isOpen: false }
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
