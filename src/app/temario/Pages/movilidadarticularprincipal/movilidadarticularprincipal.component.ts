import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { MovilidadarticularComponent } from "../../Components/movilidadarticular/movilidadarticular.component";

@Component({
  selector: 'app-movilidadarticularprincipal',
  standalone:true,
  imports: [CabeceraComponent,MovilidadarticularComponent],
  templateUrl: './movilidadarticularprincipal.component.html',
  styleUrl: '../Cssgeneral.css'
})
export class MovilidadarticularprincipalComponent {

}
