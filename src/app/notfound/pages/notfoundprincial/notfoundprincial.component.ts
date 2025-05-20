import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { CuatrocerocuatroComponent } from "../../Components/cuatrocerocuatro/cuatrocerocuatro.component";

@Component({
  selector: 'app-notfoundprincial',
  standalone:true,
  imports: [CabeceraComponent,CuatrocerocuatroComponent],
  templateUrl: './notfoundprincial.component.html',
  styleUrl: './notfoundprincial.component.css'
})
export class NotfoundprincialComponent {

}
