import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cursos-lista',
  /*template: `
    <h3>Olá, meu nome é {{ nomePortal }}</h3>
    <ul>
    <!-- o * é chamado de sugar operator -->
      <li *ngFor="let curso of cursos">
        {{ curso }}
      </li>
    </ul>
  `*/
  templateUrl: 'cursos.component.html'
})
export class CursosComponent {

  nomePortal = 'loiane.training';
  cursos = ['Angular 2', 'Java', 'Ext JS'];
}
