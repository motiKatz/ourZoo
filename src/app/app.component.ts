import { Component } from '@angular/core';
import { PagingService } from './servise/paging.service';
import { BirdsService } from './servise/birds.service';
import { BeastsService } from './servise/beasts.service';
import { WildService } from './servise/wild.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titel = 'ourZoo';
  // wild: any;
  constructor(public paging:PagingService,public birds:BirdsService,public beasts:BeastsService, public wilds:WildService ){}

  getUp(ev){
    console.log('appComponenent',ev);

    switch(this.paging.currentPanel){
      case 'birds':
        console.log('switch birds')
        let newBirdIndex = this.getNameCurrentIndex(this.birds.currentBirdIndex,ev,this.birds.birds)
        this.birds.currentBirdIndex = newBirdIndex
        this.birds.currentBird = this.birds.birds[newBirdIndex]
        break;
      case 'beasts': 
        let newCowIndex = this.getNameCurrentIndex(this.beasts.currentBeastIndex,ev,this.beasts.beasts)
        this.beasts.currentBeastIndex = newCowIndex
        this.beasts.currentBeast = this.beasts.beasts[newCowIndex]
        break;
      case 'wilds':
         console.log('insid wilds')
          let newWildsIndex = this.getNameCurrentIndex(this.wilds.currentWildsIndex,ev,this.wilds.wilds)
           console.log(newWildsIndex)
          this.wilds.currentWildsIndex = newWildsIndex
          console.log(76)
          this.wilds.currentWilds = this.wilds.wilds[newWildsIndex] 
          break; 
      default:
        break;
    } 
  

    }
  getNameCurrentIndex(current: number, delta:number, Array: {}[]):number {
    console.log(current +' '+delta);
    
    let max = Array.length -1;
    let newIndex = current + delta;
    if (newIndex > max){
      newIndex = 0
    }
    if (newIndex < 0){
      newIndex = max
    }
    console.log(newIndex)
    return newIndex
  }
  }





  

