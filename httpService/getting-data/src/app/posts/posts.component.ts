import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent {

  posts: any[];

  constructor(http: Http) {

    http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.posts = response.json();
        console.log(response.json());
        // console.log(response);
      });
  }


}
