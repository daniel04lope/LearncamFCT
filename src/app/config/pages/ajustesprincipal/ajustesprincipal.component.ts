import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { AjustesComponent } from "../../Components/ajustes/ajustes.component";

@Component({
  selector: 'app-ajustesprincipal',
  standalone: true,
  imports: [MainPageModule, AjustesComponent],

  templateUrl: './ajustesprincipal.component.html',
  styleUrl: './ajustesprincipal.component.css'
})
export class AjustesprincipalComponent {

}
