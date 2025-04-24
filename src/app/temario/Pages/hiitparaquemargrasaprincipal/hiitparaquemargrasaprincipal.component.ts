import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { HiitparaquemarComponent } from '../../Components/hiitparaquemar/hiitparaquemar.component';

@Component({
  selector: 'app-hiitparaquemargrasaprincipal',
  standalone : true,
  imports: [CabeceraComponent,HiitparaquemarComponent],
  templateUrl: './hiitparaquemargrasaprincipal.component.html',
  styleUrl: '../Cssgeneral.css'
})
export class HiitparaquemargrasaprincipalComponent {

}
