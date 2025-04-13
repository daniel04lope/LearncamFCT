import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnChanges {
  @Input() terminoBusqueda: string = '';
  contenidoOriginal = [
    { nombre: 'Yoga para Principiantes', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Pilates en Casa', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Cardio Básico', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Entrenamiento Funcional', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Zumba Fitness', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'HIIT Intermedio', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Estiramientos y Movilidad', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Meditación y Respiración', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'CrossFit Adaptado', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Aeróbicos Clásicos', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Baile Deportivo', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Gimnasia Suave', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Body Combat', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Tabata Training', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Tai Chi Básico', imagen: '../../../../assets/404.jpg', url: '/temario' }
  ];
  

  resultadosFiltrados = [...this.contenidoOriginal];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['terminoBusqueda']) {
      this.buscarEnCatalogo(this.terminoBusqueda);
    }
  }

  buscarEnCatalogo(termino: string) {
    const term = termino.toLowerCase();
    this.resultadosFiltrados = this.contenidoOriginal.filter(item =>
      item.nombre.toLowerCase().includes(term)
    );
  }
}
