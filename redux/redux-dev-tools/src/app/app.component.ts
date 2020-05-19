import { Component } from '@angular/core';
import { IAppState } from './store';
import { INCREMENT } from './actions';
import { NgRedux, select } from 'ng2-redux';
import { Map } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @select(s => s.get('counter')) count; 

  constructor(private ngRedux: NgRedux<Map<string, any>>) {
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
