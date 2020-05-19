import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
app.module.ts: colocar no metadado providers
*/
@Injectable()
export class PostService {

  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    //return a Observable
    return this.http.get(this.url);
  }

  createPost(post) {
    //return a Observable
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post) {
    //return a Observable
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  deletePost(id) {
    //return a Observable
    return this.http.delete(this.url + '/' + id);
  }
}
