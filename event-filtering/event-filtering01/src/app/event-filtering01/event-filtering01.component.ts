import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-filtering01',
  templateUrl: './event-filtering01.component.html'
})
export class EventFiltering01Component {

  onKeyUp($event) {
    console.log("ENTER was pressed: ", $event.target.value);
    // console.log($event.target.value);
  }


  // modo antigo
  onKeyUpDeprecated($event) {
    if($event.keyCode === 13) {
      console.log("ENTER was pressed deprecated mode example: ", $event.target.value);
    }
  }

  constructor() { }

}
