import { Component, OnInit } from '@angular/core';
 import { BeastsService } from 'src/app/servise/beasts.service';
import { log } from 'util';

@Component({
  selector: 'app-beasts-panel',
  templateUrl: './beasts-panel.component.html',
  styleUrls: ['./beasts-panel.component.css']
})
export class BeastsPanelComponent implements OnInit {

  constructor(public beastsSvc:BeastsService) {
    console.log('BeastsPanelComponent ctor');
    
   }

  ngOnInit() {
  }

}
