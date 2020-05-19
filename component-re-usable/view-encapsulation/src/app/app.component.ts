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

  // usando uma interface para eventArgs, está declarada em favorite.component.ts
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("appComponent.onFavoriteChanged(), eventArgs: ", eventArgs);
  }
}
