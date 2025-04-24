import { Component } from '@angular/core';
import { MeditacionyrespiracionComponent } from "../../Components/meditacionyrespiracion/meditacionyrespiracion.component";
import { CabeceraComponent } from '../../../main-page/components/cabecera/cabecera.component';

@Component({
  selector: 'app-meditacionyrespiracionprincipal',
  standalone: true,
  imports: [MeditacionyrespiracionComponent,CabeceraComponent],
  templateUrl: './meditacionyrespiracionprincipal.component.html',
  styleUrl: '../Cssgeneral.css'
})
export class MeditacionyrespiracionprincipalComponent {

}
