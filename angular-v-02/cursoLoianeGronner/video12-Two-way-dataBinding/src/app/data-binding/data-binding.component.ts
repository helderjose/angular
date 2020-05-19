import { Component, OnInit } from '@angular/core';


@Component({
    /*moduleId: module.id,*/
    selector: 'exemplo-data-binding',
    templateUrl: 'data-binding.component.html',
    styleUrls: ['data-binding.component.css']
    /*,
    styles:[
      `
        .highlight{
          background-color: yellow;
          font-weight: bold;
        }
      `
    ]*/
})

export class DataBindingComponent {
    constructor() { }

    url = 'http://loiane.com';
    urlImg = 'http://lorempixel.com/400/200/nature/';

    conteudoAtual: string = '';
    conteudoSalvo: string = '';
    isMouseOver = false;

    getValor(){
        return 1;
    }

    onClick(){
      alert("botão clicado");
    }

    onKeyup(event:KeyboardEvent){
      console.log(event);
      this.conteudoAtual = (<HTMLInputElement>event.target).value;
    }

    onSave(valor : string){
      this.conteudoSalvo = valor;
    }

    onMouseSpan(){
      this.isMouseOver = !this.isMouseOver;
    }

    //----------------
    nome : string = 'Maria';
    pessoa = {nome: '', idade: 18};
}
