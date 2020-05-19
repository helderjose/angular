import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventBinding01Component } from './event-binding01/event-binding01.component';


@NgModule({
  declarations: [
    AppComponent,
    EventBinding01Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
