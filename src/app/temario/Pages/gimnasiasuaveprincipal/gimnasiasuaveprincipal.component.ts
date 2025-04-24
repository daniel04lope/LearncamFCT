import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { GimnasiasuaveComponent } from '../../Components/gimnasiasuave/gimnasiasuave.component';

@Component({
  selector: 'app-gimnasiasuaveprincipal',
  standalone: true,
  imports: [CabeceraComponent,GimnasiasuaveComponent],
  templateUrl: './gimnasiasuaveprincipal.component.html',
  styleUrl: '../Cssgeneral.css'
})
export class GimnasiasuaveprincipalComponent {

}
