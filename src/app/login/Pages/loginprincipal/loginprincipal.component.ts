import { Component } from '@angular/core';
import { LoginComponent } from "../../Components/login/login.component";
import { MainPageModule } from "../../../main-page/main-page.module";
import { CabeceraComponent } from "../../../main-page/components/cabecera/cabecera.component";

@Component({
  selector: 'app-loginprincipal',
  imports: [LoginComponent, MainPageModule],
  standalone: true,
  templateUrl: './loginprincipal.component.html',
  styleUrl: './loginprincipal.component.css'
})
export class LoginprincipalComponent {

}
