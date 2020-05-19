import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe01',
  templateUrl: './pipe01.component.html'
})
export class Pipe01Component {

  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }

  constructor() { }

}
