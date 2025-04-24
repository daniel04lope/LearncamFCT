import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { TabatatrainingComponent } from '../../Components/tabatatraining/tabatatraining.component';

@Component({
  selector: 'app-tabatatrainingprincipal',
  standalone : true,
  imports: [CabeceraComponent,TabatatrainingComponent],
  templateUrl: './tabatatrainingprincipal.component.html',
  styleUrl: '../Cssgeneral.css'
})
export class TabatatrainingprincipalComponent {

}
