import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  

  /*
  Se for alterar apenas alguns campos do objeto dê preferência para o patch,
  ex: se tiver um json grande e for alterar apenas alguns campos, use patch.
  */
  updatePost(post) {
    //atualizando apenas uma propriedade do objeto com patch
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response.json());
      })

    //put tem que passar o objeto todo
    // this.http.put(this.url, JSON.stringify(post))
  }


  // para baixo é do exemplo anterior


  /*
    post['id'] vai criar o campo 'id' no let post
  */
  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post); //coloca o novo post no index 0 do array de posts
        console.log(response.json());
      });
  }


  private url = 'http://jsonplaceholder.typicode.com/posts';
  posts: any[];

  constructor(private http: Http) {

    http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
        console.log(response.json());
        // console.log(response);
      });
  }


}
