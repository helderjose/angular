import { Component } from '@angular/core';
import { IAppState } from './store';
import { INCREMENT } from './actions';
import { NgRedux, select } from 'ng2-redux';

// imports desse exemplo
import { Map } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //  state.get('counter') nao funciona com immutable object, por isso usou arrow function
  @select(s => s.get('counter')) count; 

  // <Map<string, any>>
  constructor(private ngRedux: NgRedux<Map<string, any>>) {
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
