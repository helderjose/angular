import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


// assisstir esse vídeo e fazer o exemplo completo.
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  /*encapsulation: ViewEncapsulation.Emulated*/
  /*encapsulation: ViewEncapsulation.Native*/
  encapsulation: ViewEncapsulation.None
})
export class FavoriteComponent {
  

  
  @Output('change') click = new EventEmitter();
  @Input('isFavorite') isSelected: boolean;

  onClick() {
    this.isSelected = !this.isSelected;
    console.log("favoriteComponent.onClick(), isSelected: " + this.isSelected);

    this.click.emit({ newValue: this.isSelected });  //passando um object
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}