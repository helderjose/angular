
//import do decorator Injectable.
import { Injectable } from '@angular/core';

/*
import { Injectable } from '@angular/core';
@Injectable()
Decorando a classe com @Injectable posso injetar a classe
em outra.
*/
@Injectable()
export class CursosService {

    getCursos() {
        return ['Angular 2', 'Java', 'Ext JS', 'Estrutura de Dados'];
    }
}