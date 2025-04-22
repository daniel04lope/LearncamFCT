import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { PilatesencasaComponent } from '../../Components/pilatesencasa/pilatesencasa.component';

@Component({
  selector: 'app-pilatesencasaprincipal',
  standalone:true,
  imports: [CabeceraComponent,PilatesencasaComponent],
  templateUrl: './pilatesencasaprincipal.component.html',
  styleUrl: './pilatesencasaprincipal.component.css'
})
export class PilatesencasaprincipalComponent {

}
