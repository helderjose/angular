
import { Component } from '@angular/core';

//importa do provider
import { CursosService } from './cursos.service';


@Component({
    /*moduleId: module.id, em uma versao antiga pracisava disso*/
    selector: 'cursos-lista',
    templateUrl: 'cursos.component.html',
    /*providers: informa ao angular que é para injetar o 'CursosService'
    preciso inserir a clase que vai ser injetada no providers*/
    providers: [CursosService]
})


export class CursosComponent{

    nomePortal = 'loiane.training';
    cursos;

    /*
    constructor(cursosService: CursosService) {...
        injetando CursosService
    */
    constructor(cursosService: CursosService) {
    this.cursos = cursosService.getCursos();//chamada do método do serviço.
  }
}