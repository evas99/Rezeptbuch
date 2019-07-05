import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RezeptComponent } from './rezept/rezept.component';
import { ZutatenlisteComponent } from './zutatenliste/zutatenliste.component';
import { EinkaufslisteComponent } from './einkaufsliste/einkaufsliste.component';

@NgModule({
  declarations: [
    AppComponent,
    RezeptComponent,
    ZutatenlisteComponent,
    EinkaufslisteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
