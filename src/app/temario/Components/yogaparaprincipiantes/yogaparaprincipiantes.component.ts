import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-yogaparaprincipiantes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './yogaparaprincipiantes.component.html',
  styleUrl: './yogaparaprincipiantes.component.css'
})
export class YogaparaprincipiantesComponent {
  itemsState = [
    {
      title: 'Tema 1: Introducción al Yoga',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Actividad 1: Postura de la montaña (Tadasana)', link: '/camera', isOpen: false },
        { name: 'Actividad 2: Postura del perro hacia abajo (Adho Mukha Svanasana)', link: '/actividad-2', isOpen: false },
        { name: 'Actividad 3: Postura del niño (Balasana)', link: '/actividad-3', isOpen: false }
      ]
    },
    {
      title: 'Tema 2: Respiración y Relax',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Actividad 4: Pranayama - Respiración profunda', link: '/actividad-4', isOpen: false },
        { name: 'Actividad 5: Relajación guiada', link: '/actividad-5', isOpen: false },
        { name: 'Actividad 6: Técnicas básicas de respiración', link: '/actividad-6', isOpen: false }
      ]
    },
    {
      title: 'Tema 3: Flexibilidad y Fortalecimiento',
      isOpen: false, // Accordion item toggle state
      activities: [
        { name: 'Actividad 7: Estiramiento de piernas (Paschimottanasana)', link: '/actividad-7', isOpen: false },
        { name: 'Actividad 8: Postura del guerrero (Virabhadrasana)', link: '/actividad-8', isOpen: false },
        { name: 'Actividad 9: Postura del puente (Setu Bandhasana)', link: '/actividad-9', isOpen: false }
      ]
    }
  ];

  // Toggle the accordion item (Tema 1, Tema 2, Tema 3)
  toggle(index: number): void {
    this.itemsState[index].isOpen = !this.itemsState[index].isOpen;
  }

  // Toggle individual activity visibility
  toggleActivity(index: number, activityIndex: number): void {
    this.itemsState[index].activities[activityIndex].isOpen = !this.itemsState[index].activities[activityIndex].isOpen;
  }
}
