import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { CardiobasicoComponent } from "../../Components/cardiobasico/cardiobasico.component";

@Component({
  selector: 'app-cardiobasicoprincipal',
  standalone:true,
  imports: [CabeceraComponent,CardiobasicoComponent],
  templateUrl: './cardiobasicoprincipal.component.html',
  styleUrl: '../Cssgeneral.css'
})
export class CardiobasicoprincipalComponent {

}
