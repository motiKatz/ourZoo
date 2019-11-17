import { Injectable } from '@angular/core';
import { Wild } from '../models/wilds.module';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class WildService {

  constructor(private http:HttpClient) {
    console.log('ctor wildsService');
  

   http.get('https://raw.githubusercontent.com/motiKatz/wilds/master/docs/wilds.json')
     .subscribe(data =>{
      this.wilds = data as Wild[]
      this.currentWilds = this.wilds[0]

    })
  }

//   wilds=[{name:"lion",height:"1m",weight:"650kg",lifespan:"6y",predator:"true",src:"https://www.israelhayom.co.il/sites/default/files/styles/566x349/public/images/articles/2018/06/01/15278552746552_b.jpg"},
//   {name:"leopard",height:"80cm",weight:"470kg",lifespan:"7y",predator:"true",src:"http://blog.tapuz.co.il/funmakers/images/991600_176.jpg"},
//   {name:"monkey","height":"150cm",weight:"80kg",lifespan:"5y",predator:"false",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyps4Yo-gXHkXpZjFN_rt78MTc1IrRyMikcst8u-rFZfEPm7SKcQ&s"},
//   {name:"elephhant",height:"2m",weight:"2T",lifespan:"8y",predator:"true",src:"http://www.medi-vet.co.il/_Uploads/dbsArticles/_cut/F0_0320_0000_pil.free.jpg"},
//   {name:"bear",height:"180cm",weight:"730kg",lifespan:"10m",predator:"true",src:"https://www.lametayel.co.il/limages/26089d91c04d807fe1adb6d2b25e97f2.jpg?l=1246x810&m=1246x810&s=623x405&type=r"}
//  ]

//   currentWildsIndex = 0
//   currentWilds = this.wilds[this.currentWildsIndex]
wilds:Wild[] = []
currentWildsIndex = 0
currentWilds:Wild
}

