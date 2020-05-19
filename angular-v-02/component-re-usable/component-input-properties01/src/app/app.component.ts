import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // isFavorite: true     esse valor nunca eh alterado
  post = {
    title: "Title",
    isFavorite: true
  }

  //todo: criar um setInterval para ficar imprimindo o isFAvorite, para ver se muda ou nao
}
