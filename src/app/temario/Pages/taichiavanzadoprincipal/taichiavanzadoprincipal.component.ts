import { Component } from '@angular/core';
import { TaichiavanzadoComponent } from "../../Components/taichiavanzado/taichiavanzado.component";
import { CabeceraComponent } from '../../../main-page/components/cabecera/cabecera.component';

@Component({
  selector: 'app-taichiavanzadoprincipal',
  standalone: true,
  imports: [TaichiavanzadoComponent,CabeceraComponent],
  templateUrl: './taichiavanzadoprincipal.component.html',
  styleUrl: './taichiavanzadoprincipal.component.css'
})
export class TaichiavanzadoprincipalComponent {

}
