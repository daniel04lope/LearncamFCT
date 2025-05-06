import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from "./main-page/components/cabecera/cabecera.component";
import { MainPageModule } from './main-page/main-page.module';
import { MainpagesprincipalComponent } from './main-page/pages/mainpagesprincipal/mainpagesprincipal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainpagesprincipalComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LearncamFCT';
}
