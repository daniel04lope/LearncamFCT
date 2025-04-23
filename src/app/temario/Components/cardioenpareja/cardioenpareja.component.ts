import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cardioenpareja',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardioenpareja.component.html',
  styleUrl: './cardioenpareja.component.css'
})
export class CardioenparejaComponent {
  itemsState = [
    {
      title: 'Tema 1: Coordinación y Complicidad',
      isOpen: false,
      activities: [
        { name: 'Ejercicios espejo', link: '/camera', isOpen: false },
        { name: 'Movimientos sincronizados básicos', link: '/camera', isOpen: false },
        { name: 'Juegos de coordinación en pareja', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Cardio Dinámico en Pareja',
      isOpen: false,
      activities: [
        { name: 'Saltos enfrentados', link: '/camera', isOpen: false },
        { name: 'Sentadillas con palmadas', link: '/camera', isOpen: false },
        { name: 'Desplazamientos laterales con toque', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Desafíos Cardio Colaborativos',
      isOpen: false,
      activities: [
        { name: 'Burpees por turnos', link: '/camera', isOpen: false },
        { name: 'Plancha con contacto', link: '/camera', isOpen: false },
        { name: 'Carrera en el lugar en pareja', link: '/camera', isOpen: false }
      ]
    },
    {
      title: 'Tema 4: Enfriamiento y Estiramiento Guiado',
      isOpen: false,
      activities: [
        { name: 'Respiración sincronizada', link: '/camera', isOpen: false },
        { name: 'Estiramiento de brazos y piernas en dúo', link: '/camera', isOpen: false },
        { name: 'Cierre de sesión con feedback entre compañeros', link: '/camera', isOpen: false }
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
