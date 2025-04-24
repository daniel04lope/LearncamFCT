import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { GimnasiaparamayoresComponent } from "../../Components/gimnasiaparamayores/gimnasiaparamayores.component";

@Component({
  selector: 'app-gimnasiaparamayoresprincipal',
  standalone: true,
  imports: [CabeceraComponent,GimnasiaparamayoresComponent],
  templateUrl: './gimnasiaparamayoresprincipal.component.html',
  styleUrl: '../Cssgeneral.css'
})
export class GimnasiaparamayoresprincipalComponent {

}
