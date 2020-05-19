import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  //vários validators
  form = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ])
  });

  get username() {
    return this.form.get('username');
  }
}
