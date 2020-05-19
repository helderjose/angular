import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

//imports desse exemplo
import { fromJS, Map } from 'immutable';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  //NgRedux<Map<string, any>>
  constructor(ngRedux: NgRedux<Map<string, any>>) {
    /*
    fromJS function gets a plain javascript object and returns an immutable object which is of type map.
    */
    ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE))
  }
}
