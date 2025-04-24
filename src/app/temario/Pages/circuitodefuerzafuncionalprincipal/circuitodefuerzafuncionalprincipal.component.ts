import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { CircuitodefuerzaComponent } from "../../Components/circuitodefuerza/circuitodefuerza.component";

@Component({
  selector: 'app-circuitodefuerzafuncionalprincipal',
  standalone:true,
  imports: [CabeceraComponent,CircuitodefuerzaComponent],
  templateUrl: './circuitodefuerzafuncionalprincipal.component.html',
  styleUrl: '../Cssgeneral.css'
})
export class CircuitodefuerzafuncionalprincipalComponent {

}
