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
    { nombre: 'Yoga para Principiantes', categoria: 'Yoga', imagen: '../../../../assets/yogaparaprincipantes.png', url: '/temario' },
    { nombre: 'Yoga Avanzado', categoria: 'Yoga', imagen: '../../../../assets/yoga avanzado.png', url: '/temario' },
    { nombre: 'Pilates en Casa', categoria: 'Pilates', imagen: '../../../../assets/Pilates en casa.png', url: '/temario' },
    { nombre: 'Pilates con Banda Elástica', categoria: 'Pilates', imagen: '../../../../assets/pilatesbandaelastica.png', url: '/temario' },
    { nombre: 'Cardio Básico', categoria: 'Cardio', imagen: '../../../../assets/cardiobasico.png', url: '/temario' },
    { nombre: 'Cardio en Pareja', categoria: 'Cardio', imagen: '../../../../assets/cardioenpareja.png', url: '/temario' },
    { nombre: 'Entrenamiento Funcional', categoria: 'Fuerza', imagen: '../../../../assets/Entrenamiento funcional.png', url: '/temario' },
    { nombre: 'Circuito de Fuerza', categoria: 'Fuerza', imagen: '../../../../assets/Circuito de fuerza.png', url: '/temario' },
    { nombre: 'Zumba Fitness', categoria: 'Baile', imagen: '../../../../assets/zumbafitness.png', url: '/temario' },
    { nombre: 'Ritmos Latinos', categoria: 'Baile', imagen: '../../../../assets/Ritmoslatinos.png', url: '/temario' },
    { nombre: 'HIIT Intermedio', categoria: 'Cardio', imagen: '../../../../assets/HIIT Intermedio.png', url: '/temario' },
    { nombre: 'HIIT para Quemar Grasa', categoria: 'Cardio', imagen: '../../../../assets/HIIT para quemar grasa.png', url: '/temario' },
    { nombre: 'Estiramientos y Movilidad', categoria: 'Movilidad', imagen: '../../../../assets/Estiramientos y Movilidad.png', url: '/temario' },
    { nombre: 'Movilidad Articular', categoria: 'Movilidad', imagen: '../../../../assets/Movilidad Articular.png', url: '/temario' },
    { nombre: 'Meditación y Respiración', categoria: 'Mindfulness', imagen: '../../../../assets/Meditación y Respiración.png', url: '/temario' },
    { nombre: 'Mindfulness Diario', categoria: 'Mindfulness', imagen: '../../../../assets/Mindfulness Diario.png', url: '/temario' },
    { nombre: 'CrossFit Adaptado', categoria: 'Fuerza', imagen: '../../../../assets/Crossfit adaptado.png', url: '/temario' },
    { nombre: 'CrossFit para Principiantes', categoria: 'Fuerza', imagen: '../../../../assets/Crossfit para principiantes.png', url: '/temario' },
    { nombre: 'Aeróbicos Clásicos', categoria: 'Cardio', imagen: '../../../../assets/Clásicos del Aeróbic.png', url: '/temario' },
    { nombre: 'Baile Deportivo', categoria: 'Baile', imagen: '../../../../assets/bailedeportivo.png', url: '/temario' },
    { nombre: 'Gimnasia Suave', categoria: 'Movilidad', imagen: '../../../../assets/Gimnasia suave.png', url: '/temario' },
    { nombre: 'Gimnasia para Mayores', categoria: 'Movilidad', imagen: '../../../../assets/Gimnasia para mayores.png', url: '/temario' },
    { nombre: 'Body Combat', categoria: 'Fuerza', imagen: '../../../../assets/combatecorporal.png', url: '/temario' },
    { nombre: 'Kickboxing Fitness', categoria: 'Fuerza', imagen: '../../../../assets/Kickboxing Fitness.png', url: '/temario' },
    { nombre: 'Tabata Training', categoria: 'Cardio', imagen: '../../../../assets/Tabata Training.png', url: '/temario' },
    { nombre: 'Tabata Express', categoria: 'Cardio', imagen: '../../../../assets/Tabata Express.png', url: '/temario' },
    { nombre: 'Tai Chi Básico', categoria: 'Mindfulness', imagen: '../../../../assets/Tai Chi Básico.png', url: '/temario' },
    { nombre: 'Tai Chi Avanzado', categoria: 'Mindfulness', imagen: '../../../../assets/Tai Chi Avanzado.png', url: '/temario' }
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
