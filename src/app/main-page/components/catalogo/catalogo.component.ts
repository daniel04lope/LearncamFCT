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
    { nombre: 'Yoga para Principiantes', categoria: 'Yoga', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Yoga Avanzado', categoria: 'Yoga', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Pilates en Casa', categoria: 'Pilates', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Pilates con Banda Elástica', categoria: 'Pilates', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Cardio Básico', categoria: 'Cardio', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Cardio en Pareja', categoria: 'Cardio', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Entrenamiento Funcional', categoria: 'Fuerza', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Circuito de Fuerza', categoria: 'Fuerza', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Zumba Fitness', categoria: 'Baile', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Ritmos Latinos', categoria: 'Baile', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'HIIT Intermedio', categoria: 'Cardio', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'HIIT para Quemar Grasa', categoria: 'Cardio', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Estiramientos y Movilidad', categoria: 'Movilidad', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Movilidad Articular', categoria: 'Movilidad', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Meditación y Respiración', categoria: 'Mindfulness', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Mindfulness Diario', categoria: 'Mindfulness', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'CrossFit Adaptado', categoria: 'Fuerza', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'CrossFit para Principiantes', categoria: 'Fuerza', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Aeróbicos Clásicos', categoria: 'Cardio', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Baile Deportivo', categoria: 'Baile', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Gimnasia Suave', categoria: 'Movilidad', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Gimnasia para Mayores', categoria: 'Movilidad', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Body Combat', categoria: 'Fuerza', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Kickboxing Fitness', categoria: 'Fuerza', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Tabata Training', categoria: 'Cardio', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Tabata Express', categoria: 'Cardio', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Tai Chi Básico', categoria: 'Mindfulness', imagen: '../../../../assets/404.jpg', url: '/temario' },
    { nombre: 'Tai Chi Avanzado', categoria: 'Mindfulness', imagen: '../../../../assets/404.jpg', url: '/temario' }
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
  get resultadosPorCategoria() {
    const categorias: { [key: string]: any[] } = {};
    for (const item of this.resultadosFiltrados) {
      if (!categorias[item.categoria]) {
        categorias[item.categoria] = [];
      }
      categorias[item.categoria].push(item);
    }
    return categorias;
  }
  
}
