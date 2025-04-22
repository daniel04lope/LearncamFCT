import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { TaichibasicoComponent } from '../../Components/taichibasico/taichibasico.component';

@Component({
  selector: 'app-taichibasicoprincipal',
  standalone: true,
  imports: [CabeceraComponent,TaichibasicoComponent],
  templateUrl: './taichibasicoprincipal.component.html',
  styleUrl: './taichibasicoprincipal.component.css'
})
export class TaichibasicoprincipalComponent {

}
