import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventFiltering01Component } from './event-filtering01/event-filtering01.component';


@NgModule({
  declarations: [
    AppComponent,
    EventFiltering01Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
