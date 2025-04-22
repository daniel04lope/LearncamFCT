import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { CardioenparejaComponent } from '../../Components/cardioenpareja/cardioenpareja.component';

@Component({
  selector: 'app-cardioenparejaprincipal',
  standalone: true ,
  imports: [CabeceraComponent,CardioenparejaComponent],
  templateUrl: './cardioenparejaprincipal.component.html',
  styleUrl: './cardioenparejaprincipal.component.css'
})
export class CardioenparejaprincipalComponent {

}
