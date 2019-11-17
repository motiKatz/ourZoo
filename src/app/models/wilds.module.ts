import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Wild { 
    name:string;
    height:string;
    weight:string;
    lifespan:boolean;
    predator:boolean;
    src:string;
 }