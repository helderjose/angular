import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class PostService {

  private url = 'http://jsonplaceholder.typicode.com/posts';

  //url inválida para simular um erro (será capiturado pelo app-error-handler.ts)
  // private url = 'http://abcjsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);//return a Observable
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .catch((error: Response) => {
        if (error.status === 400)
          //retorna error.json porque tem informações sobre os campos inválidos
          return Observable.throw(new BadInput(error.json()));
        return Observable.throw(new AppError(error.json()));
      });
  }

  updatePost(post) {
    //return a Observable
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
      .catch((error: Response) => {
        if(error.status === 404)
          return Observable.throw(new NotFoundError());
        return Observable.throw(new AppError(error));
      });
  }
}
