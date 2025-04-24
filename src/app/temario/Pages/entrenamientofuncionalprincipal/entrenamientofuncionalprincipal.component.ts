import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { EntrenamientofuncionalComponent } from "../../Components/entrenamientofuncional/entrenamientofuncional.component";

@Component({
  selector: 'app-entrenamientofuncionalprincipal',
  standalone: true,
  imports: [CabeceraComponent, EntrenamientofuncionalComponent],
  templateUrl: './entrenamientofuncionalprincipal.component.html',
  styleUrl: '../Cssgeneral.css'
})
export class EntrenamientofuncionalprincipalComponent {

}
