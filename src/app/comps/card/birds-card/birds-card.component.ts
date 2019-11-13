import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/servise/birds.service';

@Component({
  selector: 'app-birds-card',
  templateUrl: './birds-card.component.html',
  styleUrls: ['./birds-card.component.css']
})
export class BirdsCardComponent implements OnInit {

  constructor(public birdsSvc:BirdsService) {
    console.log('BirdCardComponent ctor');
    
  }

  ngOnInit() {
    console.log('BirdCardComponent ngOnInit');
  }

}
