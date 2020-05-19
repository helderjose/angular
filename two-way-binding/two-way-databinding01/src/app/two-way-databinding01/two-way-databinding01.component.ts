import { Component } from '@angular/core';

@Component({
  selector: 'two-way-databinding01',
  templateUrl: './two-way-databinding01.component.html',
  styleUrls: ['./two-way-databinding01.component.css']
})
export class TwoWayDatabinding01Component {

  email = "me@example.com";

  onKeyUp() {
    console.log(this.email);
  }

  constructor() { }

}
