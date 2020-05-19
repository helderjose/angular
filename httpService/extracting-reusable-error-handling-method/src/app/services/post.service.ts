import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/*
  Os .catch nos métodos e o "private handleError(error: Response)" são desse exemplo.
  No catch não chama this.handleError() e sim passa uma referência, observe que não tem o parênteses
  igual quando chamamos um métodos.
*/

@Injectable()
export class PostService {

  private url = 'http://jsonplaceholder.typicode.com/posts';

  //url inválida para simular um erro
  // private url = 'http://abcjsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    //return a Observable
    return this.http.get(this.url)
      .catch(this.handleError);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .catch(this.handleError);
  }

  updatePost(post) {
    //return a Observable
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .catch(this.handleError);
  }


  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
      .catch(this.handleError); //passa uma referência de handleError(...)
  }

  private handleError(error: Response) {
    if (error.status === 400)
      //retorna error.json porque tem informações sobre os campos inválidos
      return Observable.throw(new BadInput(error.json()));
    
      if(error.status === 404)
      return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }
}
