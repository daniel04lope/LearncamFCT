import { Component } from '@angular/core';
import { CabeceraComponent } from "../../components/cabecera/cabecera.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from '../../components/catalogo/catalogo.component';


@Component({
  selector: 'app-mainpagesprincipal',
  standalone: true,
  imports: [CabeceraComponent,CommonModule,CatalogoComponent],
  templateUrl: './mainpagesprincipal.component.html',
  styleUrl: './mainpagesprincipal.component.css'
})
export class MainpagesprincipalComponent {
  terminoBusqueda = '';

  actualizarBusqueda(termino: string) {
    this.terminoBusqueda = termino;
  }
}
