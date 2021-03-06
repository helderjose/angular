import { Component, Injector } from '@angular/core';
// import { createNgElementConstructor } from '../elements-dist';
import { createCustomElement } from '@angular/elements';
import { PopupService } from './popup.service';
import { PopupComponent } from './popup/popup.component';
// import { PopupComponent } from './popup.component';

@Component({
  selector: 'app-root',
  template: `
    <input #input value="Message">
    <button (click)="popup.showAsComponent(input.value)">
        Show as component </button>
    <button (click)="popup.showAsElement(input.value)">
        Show as element </button>
  `
})

export class AppComponent {
   constructor(private injector: Injector, public popup: PopupService) {
    // on init, convert PopupComponent to a custom element
    const PopupElement =
createNgElementConstructor(PopupComponent, {injector: this.injector});
    // register the custom element with the browser.
       customElements.define('popup-element', PopupElement);
  }
}











// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
// }
