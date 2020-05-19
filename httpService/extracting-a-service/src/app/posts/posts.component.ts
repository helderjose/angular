import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  /*
  Conteúdo do exemplo:
  criou o services/post.service.ts e colocou as chamadas
  ao http server nele.
  "this.service"
  */

  //as variáveis são usadas em todos exemplos.
  posts: any[];


  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response.json();
        console.log(response.json());
        // console.log(response);
      });
  }


  constructor(private service: PostService) {
  }


  /*
  By convention, HTTP delete requests don't have a body.
  So all we need to send to the server is an HTTP delete request to this endpoint.
  */
  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })
  }


  /*
  Se for alterar apenas alguns campos do objeto dê preferência para o patch
  */
  updatePost(post) {
    this.service.updatePost(post)
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

    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post); //coloca o novo post no index 0 do array de posts
        console.log(response.json());
      });
  }


  

  


  


}
