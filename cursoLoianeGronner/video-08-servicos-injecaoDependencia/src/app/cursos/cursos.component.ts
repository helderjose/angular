import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

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
  templateUrl: 'cursos.component.html',
  providers: [CursosService]
})
export class CursosComponent {

  nomePortal = 'loiane.traning';

  cursos;

  constructor(cursosService: CursosService) {
    this.cursos = cursosService.getCursos();
  }
}
