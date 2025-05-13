import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { HistorialComponent } from "../../Components/historial/historial.component";

@Component({
  selector: 'app-historialprincipal',
  standalone: true,
  imports: [CabeceraComponent,HistorialComponent],
  templateUrl: './historialprincipal.component.html',
  styleUrl: './historialprincipal.component.css'
})
export class HistorialprincipalComponent {

}
