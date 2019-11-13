import { Component, OnInit } from '@angular/core';
import { PagingService } from 'src/app/servise/paging.service';

@Component({
  selector: 'app-nev',
  templateUrl: './nev.component.html',
  styleUrls: ['./nev.component.css']
})
export class NevComponent implements OnInit {

  constructor(public paging:PagingService) { }

  ngOnInit() {
  }
  navTo(pagename:string):void{
    console.log(`navTo( ${ pagename } )`);
    this.paging.currentPanel = pagename
  }

}
