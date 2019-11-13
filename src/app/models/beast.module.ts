import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Beast { 
   name:string;
   lifespan:string;
   weight:string;
   herd:boolean;
   isYammi:number;
   src:string;
}
