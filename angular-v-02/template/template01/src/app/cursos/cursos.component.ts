
import { Component } from '@angular/core';


/*
O select cursos-lista está sendo usando no template do app.component.ts.

Template literal é o uso do acento grave (´) no metadado "template", exemplo: ´<p>hello world</p>´
*/
@Component({
    selector: 'cursos-lista',
    template: `
        <div style="background-color: bisque;">
            <h3> Cursos {{ nomePortal }} </h3>
            <ul>
                <!-- o * é chamado de sugar operator -->
                <li *ngFor="let curso of cursos">
                    {{ curso }}
                </li>
            </ul>
        </div>
    `
})

// olhar app.module.ts
export class CursosComponent{
    nomePortal = 'Loiane.training';
    cursos = ['Angular 2', 'Java', 'Ext JS'];
}