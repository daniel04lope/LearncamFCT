import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { CrossFitAdaptadoComponent } from '../../Components/cross-fit-adaptado/cross-fit-adaptado.component';

@Component({
  selector: 'app-crossfitadaptadoprincipal',
  standalone: true,
  imports: [CabeceraComponent,CrossFitAdaptadoComponent],
  templateUrl: './crossfitadaptadoprincipal.component.html',
  styleUrl: '../Cssgeneral.css'
})
export class CrossfitadaptadoprincipalComponent {

}
