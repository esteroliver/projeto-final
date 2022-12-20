import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomepageComponent } from './homepage/homepage.component';
import { SobreComponent } from './sobre/sobre.component';



@NgModule({
  declarations: [
    HomepageComponent,
    SobreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
