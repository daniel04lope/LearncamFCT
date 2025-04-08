import { Routes } from '@angular/router';
import { MainpagesprincipalComponent } from './main-page/pages/mainpagesprincipal/mainpagesprincipal.component';
import { TemariopaginaprincipalComponent } from './temario/Pages/temariopaginaprincipal/temariopaginaprincipal.component';

export const routes: Routes = [
  { path: '', component: MainpagesprincipalComponent },
  { path: 'temario', component: TemariopaginaprincipalComponent },

  { path: '**', redirectTo: '' }                        
];
