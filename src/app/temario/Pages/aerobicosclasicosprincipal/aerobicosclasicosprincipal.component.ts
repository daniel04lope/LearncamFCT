import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { AerobicosclasicosComponent } from '../../Components/aerobicosclasicos/aerobicosclasicos.component';

@Component({
  selector: 'app-aerobicosclasicosprincipal',
  standalone: true,
  imports: [CabeceraComponent,AerobicosclasicosComponent],
  templateUrl: './aerobicosclasicosprincipal.component.html',
  styleUrl: '../Cssgeneral.css'
})
export class AerobicosclasicosprincipalComponent {

}
