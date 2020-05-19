import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TwoWayDatabinding01Component } from './two-way-databinding01/two-way-databinding01.component';


// precisa do FormsModule para usar two-way-binding "ngModel"
@NgModule({
  declarations: [
    AppComponent,
    TwoWayDatabinding01Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
