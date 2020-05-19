import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CursosModule } from './cursos/cursos.module';


/*
O appModule tem escopo global da aplicação, é o módulo raiz.

declarations: lista todos os componentes, diretivas e pipes que
queremos usar nesse módulo.

imports: lista outros módulos que queremos usar nesse módulo.
Tudo que estiver no metadado 'exports' de um módulo importado, pode
ser usado em qualquer componente que esteja no metadado
'declarations'. Em outras palavras, quando importo um módulo,
posso usar tudo que estiver exposto nele em qualquer component que
esteja no metadado 'declarations'.

providers: colocamos os serviços que vai ficar disponíveis 
para todos os componentes declarados nesse módulo.

bootstrap: qual componente que deve ser instanciado quando
executar a aplicação. Nesse caso é o componente que vai
servir como container do nosso projeto.
*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
