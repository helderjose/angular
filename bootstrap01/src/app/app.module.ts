import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Bootstrap01Component } from './bootstrap01/bootstrap01.component';


@NgModule({
  declarations: [
    AppComponent,
    Bootstrap01Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
