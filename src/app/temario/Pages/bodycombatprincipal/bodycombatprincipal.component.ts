import { Component } from '@angular/core';
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";
import { BodycombatcomponentComponent } from '../../Components/bodycombatcomponent/bodycombatcomponent.component';

@Component({
  selector: 'app-bodycombatprincipal',
  standalone: true,
  imports: [CabeceraComponent,BodycombatcomponentComponent],
  templateUrl: './bodycombatprincipal.component.html',
  styleUrl: './bodycombatprincipal.component.css'
})
export class BodycombatprincipalComponent {

}
