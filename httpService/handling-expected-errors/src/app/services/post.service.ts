import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
app.module.ts: colocar no metadado providers
*/
@Injectable()
export class PostService {

  private url = 'http://jsonplaceholder.typicode.com/posts';

  //url inválida para simular um erro
  // private url = 'http://abcjsonplaceholder.typicode.com/posts';

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

  deletePost(id) {
    return this.http.delete(this.url + '/' + id);//return a Observable
  }
}
