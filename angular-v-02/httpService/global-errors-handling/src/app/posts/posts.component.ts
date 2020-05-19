import { BadInput } from './../common/bad-input';
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


  /*
    O "throw error" é desse exemplo
  */

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value = '';

    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      }, 
      (error: AppError) => {
        if(error instanceof BadInput) {
          // this.form.setErrors(error.originalError) //se tiver um reactive-forms no component.
        }
        else throw error; //will be captured by our GlobalErrorHandler (app-error-handler.ts)
      });
  }

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
            alert("This post has already been deleted. PostsComponent.deletePost()");
          else throw error; //will be captured by our GlobalErrorHandler
        });
  }




  

  // para baixo nao é desse exemplo



  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response.json();
      });
  }


  constructor(private service: PostService) {}

  

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      });
  }

  
}
