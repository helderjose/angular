import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  //as variáveis estão declaradas no fim do arquivo.
  

  /*
  By convention, HTTP delete requests don't have a body.
  So all we need to send to the server is an HTTP delete request to this endpoint.
  */
  deletePost(post) {
    this.http.delete(this.url + '/' + post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })
  }


  // para baixo é do exemplo anterior


  /*
  Se for alterar apenas alguns campos do objeto dê preferência para o patch
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


  

  constructor(private http: Http) {

    http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
        console.log(response.json());
        // console.log(response);
      });
  }


  private url = 'http://jsonplaceholder.typicode.com/posts';
  posts: any[];


}
