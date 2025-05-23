import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TraduccionService } from '../../../service/traduccion.service'; // Asegúrate del path
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Configuracion {
  tema: 'claro' | 'oscuro';
  idioma: string;
  notificaciones: boolean;
}

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule,CommonModule]
})
export class AjustesComponent implements OnInit {

  configuracion: Configuracion = {
    tema: 'claro',
    idioma: 'es',
    notificaciones: true
  };

  idiomasDisponibles = [
    { codigo: 'es', nombre: 'Español' },
    { codigo: 'en', nombre: 'Inglés' },
    { codigo: 'fr', nombre: 'Francés' }
  ];

  constructor(private traduccionService: TraduccionService) { }

  ngOnInit(): void {
    const configGuardada = localStorage.getItem('configuracion');
    if (configGuardada) {
      this.configuracion = JSON.parse(configGuardada);
      this.traducirPagina();
    }
  }
  cambiarIdioma(idioma: string) {
  const frame = (window as any).google?.translate?.TranslateElement?.impl?.instance;
  if (frame) {
    frame.setLanguage(idioma);
  } else {
    console.warn('Google Translate aún no está disponible');
  }
}


  guardarConfiguracion() {
    localStorage.setItem('configuracion', JSON.stringify(this.configuracion));
    alert('Configuración guardada!');
    this.traducirPagina();
  }

traducirPagina() {
  const idiomaDestino = this.configuracion.idioma;

  const googleLangMap: { [key: string]: string } = {
    'es': 'es',
    'en': 'en',
    'fr': 'fr'
  };

  const lang = googleLangMap[idiomaDestino];

  const intentarTraducir = () => {
    const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event('change'));
      console.log('Idioma cambiado a:', lang);
    } else {
      console.warn('Esperando a que Google Translate esté listo...');
      setTimeout(intentarTraducir, 500); // Reintenta cada 500ms
    }
  };

  intentarTraducir();
}


}
