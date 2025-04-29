import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { RegisterComponent } from '../../Components/registro/registro.component';
@Component({
  selector: 'app-registropaginaprincipal',
  standalone: true,
  imports: [CabeceraComponent, RegisterComponent],
  templateUrl: './registropaginaprincipal.component.html',
  styleUrl: './registropaginaprincipal.component.css'
})
export class RegistropaginaprincipalComponent {

}
