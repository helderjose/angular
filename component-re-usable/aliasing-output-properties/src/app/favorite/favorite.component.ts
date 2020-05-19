import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  

  //change é o mesmo nome que foi dado no app.component.html
  // @Output('change') é um Aliasing Output Properties
  @Output('change') click = new EventEmitter();

  @Input('isFavorite') isSelected: boolean;


  /*
  onClick() é o mesmo nome que foi dado no favorite.component.html
  */
  onClick() {
    this.isSelected = !this.isSelected;
    console.log("favoriteComponent.onClick(), isSelected: " + this.isSelected);

    this.click.emit({ newValue: this.isSelected });  //passando um object
  }
}

//está sendo usada no app.component.ts
export interface FavoriteChangedEventArgs {
  newValue: boolean
}