import { DataBindingComponent } from './data-binding/data-binding.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <exemplo-data-binding></exemplo-data-binding>
  `
})
export class AppComponent {
  title = 'app works!';
}
