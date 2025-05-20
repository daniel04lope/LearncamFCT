import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  imports: [FormsModule]
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

  constructor() { }

  ngOnInit(): void {
    // Aquí podrías cargar configuraciones guardadas, por ejemplo de localStorage
    const configGuardada = localStorage.getItem('configuracion');
    if (configGuardada) {
      this.configuracion = JSON.parse(configGuardada);
    }
  }

  guardarConfiguracion() {
    localStorage.setItem('configuracion', JSON.stringify(this.configuracion));
    alert('Configuración guardada!');
    // Aquí también puedes emitir un evento o llamar a un servicio para aplicar cambios globales
  }

}
