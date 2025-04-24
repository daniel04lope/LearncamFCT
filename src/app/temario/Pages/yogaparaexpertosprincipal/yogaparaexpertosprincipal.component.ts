import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { YogaavanzadoComponent } from "../../Components/yogaavanzado/yogaavanzado.component";

@Component({
  selector: 'app-yogaparaexpertosprincipal',
  standalone:true,
  imports: [CabeceraComponent,YogaavanzadoComponent],
  templateUrl: './yogaparaexpertosprincipal.component.html',
  styleUrl: '../Cssgeneral.css'
})
export class YogaparaexpertosprincipalComponent {

}
