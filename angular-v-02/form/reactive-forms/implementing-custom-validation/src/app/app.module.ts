import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//imports desse exemplo
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
