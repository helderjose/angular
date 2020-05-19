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

  // onFavoriteChanged Mesmo nome do app.component.html
  onFavoriteChanged(isFavorite) {
    this.post.isFavorite = isFavorite;
    console.log("appComponent.onFavoriteChanged(), post.isFavorite: ", this.post.isFavorite);
  }
}
