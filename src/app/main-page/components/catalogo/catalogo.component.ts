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
    { nombre: 'Yoga para Principiantes', categoria: 'Yoga', imagen: '../../../../assets/yogaparaprincipantes.png', url: '/temario/yoga-paraprincipiantes' },
    { nombre: 'Yoga Avanzado', categoria: 'Yoga', imagen: '../../../../assets/yoga avanzado.png', url: '/temario/yoga-paraexpertos' },
    { nombre: 'Pilates en Casa', categoria: 'Pilates', imagen: '../../../../assets/Pilates en casa.png', url: '/temario/pilatesen-casa' },
    { nombre: 'Pilates con Banda Elástica', categoria: 'Pilates', imagen: '../../../../assets/pilatesbandaelastica.png', url: '/temario/pilatesen-banda-elastica' },
    { nombre: 'Cardio Básico', categoria: 'Cardio', imagen: '../../../../assets/cardiobasico.png', url: '/temario/cardiobasico' },
    { nombre: 'Cardio en Pareja', categoria: 'Cardio', imagen: '../../../../assets/cardioenpareja.png', url: '/temario/cardioenpareja' },
    { nombre: 'Entrenamiento Funcional', categoria: 'Fuerza', imagen: '../../../../assets/Entrenamiento funcional.png', url: '/temario/entrenamientofuncional' },
    { nombre: 'Circuito de Fuerza', categoria: 'Fuerza', imagen: '../../../../assets/Circuito de fuerza.png', url: '/temario/circuitodefuerza-funcional' },
    { nombre: 'Zumba Fitness', categoria: 'Baile', imagen: '../../../../assets/zumbafitness.png', url: '/temario/zumbafitness' },
    { nombre: 'Ritmos Latinos', categoria: 'Baile', imagen: '../../../../assets/Ritmoslatinos.png', url: '/temario/ritmoslatinos' },
    { nombre: 'HIIT Intermedio', categoria: 'Cardio', imagen: '../../../../assets/HIIT Intermedio.png', url: '/temario/hiitintermedio' },
    { nombre: 'HIIT para Quemar Grasa', categoria: 'Cardio', imagen: '../../../../assets/HIIT para quemar grasa.png', url: '/temario/hiit-paraquemar-grasa' },
    { nombre: 'Estiramientos y Movilidad', categoria: 'Movilidad', imagen: '../../../../assets/Estiramientos y Movilidad.png', url: '/temario/estiramientoy-movilidad' },
    { nombre: 'Movilidad Articular', categoria: 'Movilidad', imagen: '../../../../assets/Movilidad Articular.png', url: '/temario/movilidadarticular' },
    { nombre: 'Meditación y Respiración', categoria: 'Mindfulness', imagen: '../../../../assets/Meditación y Respiración.png', url: '/temario/meditaciony-respiracion' },
    { nombre: 'Mindfulness Diario', categoria: 'Mindfulness', imagen: '../../../../assets/Mindfulness Diario.png', url: '/temario/mindfullnessdiario' },
    { nombre: 'CrossFit Adaptado', categoria: 'Fuerza', imagen: '../../../../assets/Crossfit adaptado.png', url: '/temario/crossfitadaptado' },
    { nombre: 'CrossFit para Principiantes', categoria: 'Fuerza', imagen: '../../../../assets/Crossfit para principiantes.png', url: '/temario/crossfitadaptado' },  // Asumo que reutiliza el mismo componente
    { nombre: 'Aeróbicos Clásicos', categoria: 'Cardio', imagen: '../../../../assets/Clásicos del Aeróbic.png', url: '/temario/aerobicosclasicos' },
    { nombre: 'Baile Deportivo', categoria: 'Baile', imagen: '../../../../assets/bailedeportivo.png', url: '/temario/bailedeportivo' },
    { nombre: 'Gimnasia Suave', categoria: 'Movilidad', imagen: '../../../../assets/Gimnasia suave.png', url: '/temario/gimnasiasuave' },
    { nombre: 'Gimnasia para Mayores', categoria: 'Movilidad', imagen: '../../../../assets/Gimnasia para mayores.png', url: '/temario/gimnasia-paramayores' },
    { nombre: 'Body Combat', categoria: 'Fuerza', imagen: '../../../../assets/combatecorporal.png', url: '/temario/bodycombat' },
    { nombre: 'Kickboxing Fitness', categoria: 'Fuerza', imagen: '../../../../assets/Kickboxing Fitness.png', url: '/temario/kickboxingfitness' },
    { nombre: 'Tabata Training', categoria: 'Cardio', imagen: '../../../../assets/Tabata Training.png', url: '/temario/tabatatraining' },
    { nombre: 'Tabata Express', categoria: 'Cardio', imagen: '../../../../assets/Tabata Express.png', url: '/temario/tabataexpress' },
    { nombre: 'Tai Chi Básico', categoria: 'Mindfulness', imagen: '../../../../assets/Tai Chi Básico.png', url: '/temario/taichibasico' },
    { nombre: 'Tai Chi Avanzado', categoria: 'Mindfulness', imagen: '../../../../assets/Tai Chi Avanzado.png', url: '/temario/taichiavanzado' }
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
