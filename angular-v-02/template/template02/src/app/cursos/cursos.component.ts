
import { Component } from '@angular/core';


/*
templateUrl é o uso de arquivo html.
styleUrls recebe um arry com arquivos css.
*/
@Component({
    /*moduleId: module.id, em uma versao antiga pracisava disso*/
    selector: 'cursos-lista',
    templateUrl: 'cursos.component.html',
    styleUrls: ['cursos.component.css']
})
export class CursosComponent{
    nomePortal = 'loiane.training';
    cursos = ['Angular 2', 'Java', 'Ext JS'];
}