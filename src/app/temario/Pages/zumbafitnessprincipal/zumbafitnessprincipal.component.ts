import { Component } from '@angular/core';
import { CabeceraComponent } from '../../../main-page/components/cabecera/cabecera.component';
import { ZumbafitnessdesplegableComponent } from '../../Components/zumbafitnessdesplegable/zumbafitnessdesplegable.component';

@Component({
  selector: 'app-zumbafitnessprincipal',
  standalone: true,
  imports: [CabeceraComponent, ZumbafitnessdesplegableComponent],
  templateUrl: './zumbafitnessprincipal.component.html',
  styleUrl: './zumbafitnessprincipal.component.css'
})
export class ZumbafitnessprincipalComponent {

}
