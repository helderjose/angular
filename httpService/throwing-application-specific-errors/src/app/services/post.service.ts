
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

//imports desse exemplo
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'; 


@Injectable()
export class PostService {

  private url = 'http://jsonplaceholder.typicode.com/posts';

  //url inválida para simular um erro
  // private url = 'http://abcjsonplaceholder.typicode.com/posts';


  //só esse método é desse exemplo
  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
      .catch((error: Response) => {
        if(error.status === 404)
          return Observable.throw(new NotFoundError()); //expected error
        return Observable.throw(new AppError(error)); //unexpected error
      });
  }


  // para baixo não é desse exemplo

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);//return a Observable
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));//return a Observable
  }

  updatePost(post) {
    //return a Observable
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  
}
