import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './components/cabecera/cabecera.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CabeceraComponent
  ],
  exports: [CabeceraComponent]
})
export class MainPageModule { }
