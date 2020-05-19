import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {

  //x é uma instância de FormControl que está associada ao input firstName
  log(x) {console.log(x)};

}
