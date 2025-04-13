import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CabeceraComponent,
    RouterModule
  ],
  exports: [CabeceraComponent]
})
export class MainPageModule { }
