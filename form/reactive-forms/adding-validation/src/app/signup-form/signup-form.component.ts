import { Component } from '@angular/core';

//Validators foi importado para esse exemplo
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  //validacao do campo username
  form = new FormGroup({
    username: new FormControl('', Validators.required)
  });

  /*
  Sem esse método, teria que usar a seguinte linha no .html
  *ngIf="form.get('username').touched && form.get('username').invalid"
  */
  get username() {
    console.log("no get username()");
    return this.form.get('username');
  }
}