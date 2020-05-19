import { Component } from '@angular/core';
import { IAppState } from './store';
import { INCREMENT } from './actions';

import { NgRedux } from 'ng2-redux';

//imports desse exemplo
import { select } from 'ng2-redux'; //We can select a slice of the store as an observable.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  /*
    @select decorator procura o campo do mesmo nome no store.ts.
    counter é o nome que está no store.ts.
    count é o nome usado no componet.

    3 modos de usar o decorator @select:
    string, array, arrow function.
  */
  //string
  @select('counter') count;
  //array
  // @select(['messagin', 'newMessages']) newMessages; // messaging.newMessages no store
  //arrow function
  // @select((s: IAppState) => s.messaging.newMessages) newMessagesCount;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  
  // // versão sem o select - evite
  // constructor(private ngRedux: NgRedux<IAppState>) {
  //   //desse exemplo - abra o console e clique no botão.
  //   var subscription = ngRedux.subscribe(() => {
  //     console.log(ngRedux.getState());
  //     var store = ngRedux.getState();
  //     this.counter = store.counter;
  //   })
  // }

  //para baixo é do exemplo anterior

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
