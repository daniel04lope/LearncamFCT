import { Component } from '@angular/core';
import { RitmoslatinosComponent } from "../../Components/ritmoslatinos/ritmoslatinos.component";
import { CabeceraComponent } from '../../../main-page/components/cabecera/cabecera.component';

@Component({
  selector: 'app-ritmoslatinosprincipal',
  standalone: true,
  imports: [RitmoslatinosComponent,CabeceraComponent],
  templateUrl: './ritmoslatinosprincipal.component.html',
  styleUrl: '../Cssgeneral.css'
})
export class RitmoslatinosprincipalComponent {

}
