import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-variables',
  templateUrl: './template-variables.component.html'
})
export class TemplateVariablesComponent {

  /*
  Usando template variable.
  O email foi declarado no template (html) com #email
  */
  emailOnKeyUp(email) {
    console.log("email: ", email);
  }

  constructor() { }

}
