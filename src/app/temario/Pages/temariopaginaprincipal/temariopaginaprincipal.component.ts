import { Component } from '@angular/core';
import { DesplegablesComponent } from '../../Components/desplegables/desplegables.component';
import { CabeceraComponent } from '../../../main-page/components/cabecera/cabecera.component';

@Component({
  selector: 'app-temariopaginaprincipal',
  standalone: true,
  imports: [DesplegablesComponent,CabeceraComponent],
  templateUrl: './temariopaginaprincipal.component.html',
  styleUrl: './temariopaginaprincipal.component.css'
})
export class TemariopaginaprincipalComponent {

}
