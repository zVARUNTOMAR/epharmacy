import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'

const MaterialComponent = [
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponent,
    MatToolbarModule
  ]
  ,exports:[
    MaterialComponent
  ]
})
export class MaterialModule { }
