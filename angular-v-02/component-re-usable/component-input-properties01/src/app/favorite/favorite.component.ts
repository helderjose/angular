import { Component, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  
  /*
  "isSelected" é o mesmo nome que foi dado no favorite.component.html

  @Input() isSelected é um Input Properties"
  */
  @Input() isSelected: boolean;


  /*
  onClick() é o mesmo nome que foi dado no favorite.component.html
  */
  onClick() {
    this.isSelected = !this.isSelected;
    console.log("favoriteComponent.onClick(), isFavorite: " + this.isSelected);
  }
}


export interface FavoriteChangedEventArgs {
  newValue: boolean
}