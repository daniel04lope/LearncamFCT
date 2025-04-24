import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { KickboxingfitnessComponent } from '../../Components/kickboxingfitness/kickboxingfitness.component';

@Component({
  selector: 'app-kickboxingfitnessprincipal',
  standalone: true,
  imports: [CabeceraComponent,KickboxingfitnessComponent],
  templateUrl: './kickboxingfitnessprincipal.component.html',
  styleUrl: '../Cssgeneral.css'
})
export class KickboxingfitnessprincipalComponent {

}
