import { Component } from '@angular/core';

import { CursosComponent } from './cursos/cursos.component';


@Component({
  selector: 'app-root',
  template: `
    <div style="background-color: orange;">
      
      <h1>Aula Template</h1>
      <p>Hello World</p>

      <cursos-lista></cursos-lista>

      <p>
        Esse exemplo usa o template literal, que é a crase no
        metadado template
      </p>
    </div>
  `
})
export class AppComponent {
  title = 'app works!';
}
