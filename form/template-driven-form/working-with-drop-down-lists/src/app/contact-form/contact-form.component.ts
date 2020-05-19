import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = [
    {id: 1, name: "Email"},
    {id: 2, name: "Phone"}
  ];

  animals = [
    {id: 1, name: "Lion"},
    {id: 2, name: "Tiger"}
  ];

  cars = [
    {id: 1, name: "Palio"},
    {id: 2, name: "Fiat 147"}
  ];


  //f é o objeto que representa o formulário
  submit(f) {
    console.log(f);
    console.log("f.valid: ", f.valid);
  }

}
