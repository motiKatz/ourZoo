import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { BeastCardComponent } from './comps/card/beast-card/beast-card.component';
import { BirdsCardComponent } from './comps/card/birds-card/birds-card.component';
import { WildCardComponent } from './comps/card/wild-card/wild-card.component';
import { HeaderComponent } from './comps/genral/header/header.component';
import { FooterComponent } from './comps/genral/footer/footer.component';
import { NevComponent } from './comps/genral/nev/nev.component';
import { PaginatorComponent } from './comps/genral/paginator/paginator.component';
import { BeastsPanelComponent } from './comps/panel/beasts-panel/beasts-panel.component';
import { BirdsPanelComponent } from './comps/panel/birds-panel/birds-panel.component';
import { WildsPanelComponent } from './comps/panel/wilds-panel/wilds-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    BeastCardComponent,
    BirdsCardComponent,
    WildCardComponent,
    HeaderComponent,
    FooterComponent,
    NevComponent,
    PaginatorComponent,
    BeastsPanelComponent,
    BirdsPanelComponent,
    WildsPanelComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
