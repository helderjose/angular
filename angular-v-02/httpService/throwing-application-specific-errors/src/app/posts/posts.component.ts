import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  //as variáveis são usadas em todos exemplos.
  posts: any[];

  //olhar o post.service.ts
  //só esse método é desse exemplo
  //click em delete para ver o erro
  deletePost(post) {
    this.service.deletePost(345) //para simular o erro
    // this.service.deletePost(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if(error instanceof NotFoundError)
            alert("This post has already been deleted");
          else {
            alert("an unexpected error occurred.");//use toast notificaion em uma aplicação real.
            console.log(error);
          }
        });
  }


  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response.json();
        // console.log(response.json());
      },
      error => {
        alert("an unexpected error occurred.");//use toast notificaion em uma aplicação real.
        console.log(error);
      });
  }


  constructor(private service: PostService) {
    //tirou o http.get daqui e colocou no ngOnInit().
    //nunca chame um http server no construtor.
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value = '';

    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id; //post['id'] vai criar o campo 'id' no let post
        this.posts.splice(0, 0, post); //coloca o novo post no index 0 do array de posts
        console.log(response.json());
      }, 
      (error: Response) => {
        if(error.status === 400) {
          // this.form.setErrors(error.json()) //se tiver um reactive-forms no component.
        }
        else {
          alert("an unexpected error occurred.");//use toast notificaion em uma aplicação real.
          console.log(error);
        }
      });
  }

  
  






  // para baixo não foi alterado nesse exemplo


  /*
  Se for alterar apenas alguns campos do objeto dê preferência para o patch
  */
  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      },
      error => {
        alert("an unexpected error occurred.");//use toast notificaion em uma aplicação real.
        console.log(error);
      });

    //put tem que passar o objeto todo
    // this.http.put(this.url, JSON.stringify(post))
  }


}
