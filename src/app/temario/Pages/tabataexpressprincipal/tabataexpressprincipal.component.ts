import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { TabatatrainingComponent } from '../../Components/tabatatraining/tabatatraining.component';
import { TabataexpressComponent } from '../../Components/tabataexpress/tabataexpress.component';

@Component({
  selector: 'app-tabataexpressprincipal',
  standalone: true,
  imports: [CabeceraComponent,TabataexpressComponent],
  templateUrl: './tabataexpressprincipal.component.html',
  styleUrl: '../Cssgeneral.css'
})
export class TabataexpressprincipalComponent {

}
