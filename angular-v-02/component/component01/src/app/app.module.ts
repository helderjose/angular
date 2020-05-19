import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//o que é declarado em app.module.ts fica disponível para toda aplicação.

/*
import do MeuPrimeiroComponent para poder usar no metadado declarations da tag
NgModule desse arquivo
*/
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
