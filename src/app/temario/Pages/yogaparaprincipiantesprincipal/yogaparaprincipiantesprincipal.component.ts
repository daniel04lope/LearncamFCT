import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { YogaparaprincipiantesComponent } from '../../Components/yogaparaprincipiantes/yogaparaprincipiantes.component';

@Component({
  selector: 'app-yogaparaprincipiantesprincipal',
  standalone:true,
  imports: [CabeceraComponent,YogaparaprincipiantesComponent],
  templateUrl: './yogaparaprincipiantesprincipal.component.html',
  styleUrl: './yogaparaprincipiantesprincipal.component.css'
})
export class YogaparaprincipiantesprincipalComponent {

}
