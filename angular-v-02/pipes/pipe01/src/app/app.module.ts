import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Pipe01Component } from './pipe01/pipe01.component';


@NgModule({
  declarations: [
    AppComponent,
    Pipe01Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
