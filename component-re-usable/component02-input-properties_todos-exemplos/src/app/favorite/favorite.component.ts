import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  
  /*
  "isFavorite" é o mesmo nome que foi dado no app.component.html
  "isSelected" é o mesmo nome que foi dado no favorite.component.html

  @Input("isFavorite") é uma "Aliasing Input Properties"
  */
  @Input("isFavorite") isSelected: boolean;

  /*
  @Output("change") é uma "Aliasing Output Properties"
  "change" é o mesmo none dado no app.component.html
  */
  @Output("change") click = new EventEmitter();


  /*
  onClick() é o mesmo nome que foi dado no favorite.component.html
  */
  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });/* passing event data */
  }
}


export interface FavoriteChangedEventArgs {
  newValue: boolean
}