import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { PilatesconbandaComponent } from "../../Components/pilatesconbanda/pilatesconbanda.component";

@Component({
  selector: 'app-pilatesenbandaelasticaprincipal',
  standalone:true,
  imports: [CabeceraComponent,PilatesconbandaComponent],
  templateUrl: './pilatesenbandaelasticaprincipal.component.html',
  styleUrl: '../Cssgeneral.css'
})
export class PilatesenbandaelasticaprincipalComponent {

}
