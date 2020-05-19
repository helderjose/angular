import { DataBindingComponent } from './data-binding/data-binding.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular 2 boilerplate</h1>
    <p>Hello World!</p>
    <exemplo-data-binding></exemplo-data-binding>

    <h1>
      {{title}}
    </h1>
    <input type='text' [(ngModel)]="pessoa2.nome"/>
    <p>Aqui: {{pessoa2.nome}}</p>
  `
})
export class AppComponent {
  title = 'Testando!';
  pessoa2: {} ={
    nome: 'teste aqui'
  }
}
