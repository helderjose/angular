import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-binding01',
  templateUrl: './event-binding01.component.html',
  styleUrls: ['./event-binding01.component.css']
})
export class EventBinding01Component {

  onSave() {
    console.log("Button was clicked");
  }

  onSave2($event) {
    console.log($event);
  }


  onClickBubblingExample($event) {
    // $event.stopPropagation(); //impede o event bubbling
    console.log("no click do botao");
  }

  onDivClicked() {
    console.log("no click do div");
  }

  constructor() { }

}
