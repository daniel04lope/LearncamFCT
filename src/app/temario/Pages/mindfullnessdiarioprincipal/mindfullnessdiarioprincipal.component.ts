import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { MindfulnessdiarioComponent } from '../../Components/mindfulnessdiario/mindfulnessdiario.component';

@Component({
  selector: 'app-mindfullnessdiarioprincipal',
  standalone: true,
  imports: [CabeceraComponent,MindfulnessdiarioComponent],
  templateUrl: './mindfullnessdiarioprincipal.component.html',
  styleUrl: '../Cssgeneral.css'
})
export class MindfullnessdiarioprincipalComponent {

}
