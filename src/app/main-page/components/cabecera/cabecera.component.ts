import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router'; 
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ], 
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  terminoBusqueda: string = '';
  
  @Output() buscar = new EventEmitter<string>();

  constructor(private router: Router) {}

  onBuscar() {
    this.buscar.emit(this.terminoBusqueda);
  }

  // Función para saber si estamos en la ruta raíz
  get mostrarBarraBusqueda(): boolean {
    return this.router.url === '/';
  }
}
