import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';

/*
É um módulo de funcionalidade.
*/

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
