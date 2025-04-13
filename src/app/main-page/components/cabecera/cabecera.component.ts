import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  terminoBusqueda: string = '';
  
  @Output() buscar = new EventEmitter<string>();

  onBuscar() {
    this.buscar.emit(this.terminoBusqueda);
  }
  
}
