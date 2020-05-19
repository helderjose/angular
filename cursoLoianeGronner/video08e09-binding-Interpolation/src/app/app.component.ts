import { DataBindingComponent } from './data-binding/data-binding.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular 2 boilerplate</h1>
    <p>Hello World!</p>
    <exemplo-data-binding></exemplo-data-binding>
  `
})
export class AppComponent {
  title = 'app works!';
}
