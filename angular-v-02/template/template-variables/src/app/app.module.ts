import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateVariablesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
