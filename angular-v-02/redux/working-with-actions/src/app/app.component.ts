import { Component } from '@angular/core';

//imports desse exemplo
import { NgRedux } from 'ng2-redux';
import { IAppState } from './store';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  counter = 0;

  //injeta NgRedux
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  /*
  Nesse exemplo só lemos o state, não escrevemos, por isso nada acontece quando clica no botão,
  será implementado no próximo exemplo
  */
  increment() {
    // this.counter++; //com redux, nao altero a variável dessa forma, usa o state
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
