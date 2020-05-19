import { Component } from '@angular/core';



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

  nome: string = 'Maria';
  pessoa: {} = { nome: '', idade: 18 };

  meuTeste: any = "testador";

  constructor() { }
}
