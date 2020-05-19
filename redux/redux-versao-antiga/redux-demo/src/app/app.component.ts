import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './store';
import { INCREMENT } from './actions';
import { Map } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @select(s => s.get('counter')) count;
  // @select('counter') count;
  // @select(['messaging', 'newMessages']) newMessages;
  // @select((s: IAppState) => s.messaging.newMessages) newMessagesCount;

  constructor(private ngRedux: NgRedux<Map<string, any>>) {
  // constructor(private ngRedux: NgRedux<IAppState>) {


    // nao precisa mais de codigo depois do 'select'
    // var subscription = ngRedux.subscribe(() => {
    //   // console.log(ngRedux.getState())
    //   var store = ngRedux.getState();
    //   this.counter = store.counter;
    // });
  }

  increment() {
    //redux
    this.ngRedux.dispatch({ type: INCREMENT });

    // this.counter++;  //angular comum, sem redux
  }
}
