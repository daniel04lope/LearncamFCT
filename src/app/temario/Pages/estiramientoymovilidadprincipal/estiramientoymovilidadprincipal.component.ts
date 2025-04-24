import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { EstiramientosymovilidadComponent } from "../../Components/estiramientosymovilidad/estiramientosymovilidad.component";

@Component({
  selector: 'app-estiramientoymovilidadprincipal',
  standalone:true,
  imports: [CabeceraComponent,EstiramientosymovilidadComponent],
  templateUrl: './estiramientoymovilidadprincipal.component.html',
  styleUrl: '../Cssgeneral.css'
})
export class EstiramientoymovilidadprincipalComponent {

}
