import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//imports desse exemplo
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { IAppState, rootReducer } from './store';

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

/*
ngRedux.configureStore (...)
primeiro argumento é um root reducer
segundo argumento {} um objeto javascript vazio (nesse exemplo), será atualizado no próximo exemplo.
*/
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, {})
  }
}
