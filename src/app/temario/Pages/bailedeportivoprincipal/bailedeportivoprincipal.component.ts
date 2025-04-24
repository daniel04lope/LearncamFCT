import { Component } from '@angular/core';
import { CabeceraComponent } from '../../../main-page/components/cabecera/cabecera.component';
import { BailedeportivoComponent } from '../../Components/bailedeportivo/bailedeportivo.component';

@Component({
  selector: 'app-bailedeportivoprincipal',
  standalone: true,
  imports: [CabeceraComponent,BailedeportivoComponent],
  templateUrl: './bailedeportivoprincipal.component.html',
  styleUrl: '../Cssgeneral.css'
})
export class BailedeportivoprincipalComponent {

}
