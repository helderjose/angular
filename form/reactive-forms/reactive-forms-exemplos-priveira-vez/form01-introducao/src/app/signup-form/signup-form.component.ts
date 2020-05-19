import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


/*
Olhar app.modules.ts
*/
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  
  //form vai ser usado no html <form [formGroup]="form">
  form = new FormGroup({
    'user-name': new FormControl(),
    'password': new FormControl(),
  });
}
