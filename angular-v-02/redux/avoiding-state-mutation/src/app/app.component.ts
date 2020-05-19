import { Component } from '@angular/core';
import { IAppState } from './store';
import { INCREMENT } from './actions';
import { NgRedux, select } from 'ng2-redux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @select('counter') count;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
