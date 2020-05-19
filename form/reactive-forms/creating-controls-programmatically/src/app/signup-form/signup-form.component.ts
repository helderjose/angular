import { Component } from '@angular/core';

//import desse exemplo
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  // pesquise por formgroup no site angular.io
  //form será usado na view em <form [FormGroup]="form"
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })
}
