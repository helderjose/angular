import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  post = {
    title: "Title",
    isFavorite: true
  }

  /*
  onFavoriteChanged é o mesmo nome que foi dado no app.component.html
  "FavoriteChangedEventArgs" é uma interface que está no favorite.component.ts
  */
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed: ", eventArgs);
  }

  tweet = {
    body: "...",
    likesCount: 10,
    isLiked: true
  }
}
