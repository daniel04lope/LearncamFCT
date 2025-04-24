import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { HiitintermedioComponent } from "../../Components/hiitintermedio/hiitintermedio.component";

@Component({
  selector: 'app-hiitintermedioprincipal',
  standalone : true,
  imports: [CabeceraComponent,HiitintermedioComponent],
  templateUrl: './hiitintermedioprincipal.component.html',
  styleUrl: '../Cssgeneral.css'
})
export class HiitintermedioprincipalComponent {

}
