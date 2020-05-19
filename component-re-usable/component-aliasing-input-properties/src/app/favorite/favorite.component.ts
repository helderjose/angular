import { Component, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  
  /*
  "isSelected" é o mesmo nome que foi dado no favorite.component.html
  "isFavorite" é o mesmo nome que foi dado no app.component.html

  @Input('isFavorite') é um Aliasing Input Properties"
  */
  @Input('isFavorite') isSelected: boolean;


  /*
  onClick() é o mesmo nome que foi dado no favorite.component.html
  */
  onClick() {
    this.isSelected = !this.isSelected;
    console.log("favoriteComponent.onClick(), isSelected: " + this.isSelected);
  }
}


export interface FavoriteChangedEventArgs {
  newValue: boolean
}