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


  ngOnInit() {
    this.service.getAll()
      .subscribe(response => {
        this.posts = response.json();
        // console.log(response.json());
      });
  }


  constructor(private service: PostService) {
    //nunca chame um http server no construtor. Chame no ngOnInit()
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value = '';

    this.service.create(post)
      .subscribe(response => {
        post['id'] = response.json().id; //post['id'] vai criar o campo 'id' no let post
        this.posts.splice(0, 0, post); //coloca o novo post no index 0 do array de posts
        console.log(response.json());
      }, 
      (error: AppError) => {
        if(error instanceof BadInput) {
          // this.form.setErrors(error.originalError) //se tiver um reactive-forms no component.
        }
        else throw error; //will be captured by our GlobalErrorHandler
      });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(response => {
        console.log(response.json());
      });
  }

  deletePost(post) {
    this.service.delete(345) //para simular o erro
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
}
