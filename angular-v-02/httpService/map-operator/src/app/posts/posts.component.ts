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
/*
  Para todas alterações para esse exemplo olhe o data.service.ts (uso do map).
  Os métodos create, update e delete foram alterados nesse exemplo.
*/
export class PostsComponent implements OnInit {

  //as variáveis são usadas em todos exemplos.
  posts: any[];


  //mudou de "response" para "posts"
  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }


  constructor(private service: PostService) {
  }

  //trocou o "response" por "newPost".
  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id; //post['id'] vai criar o campo 'id' no let post. (não é desse exemplo)
          this.posts.splice(0, 0, post); //coloca o novo post no index 0 do array de posts. (não é desse exemplo)
        }, 
      (error: AppError) => {
        if(error instanceof BadInput) {
          // this.form.setErrors(error.originalError) //se tiver um reactive-forms no component. (não é desse exemplo)
        }
        else throw error; //will be captured by our GlobalErrorHandler. (não é desse exemplo)
      });
  }

  //trocou o "response" por "updatedPost"
  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  //tirou o "response" e colocou o "()", no "subscribe"
  deletePost(post) {
    this.service.delete(345) //para simular o erro
    // this.service.deletePost(post.id)
      .subscribe(
        () => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if(error instanceof NotFoundError)
            alert("This post has already been deleted. PostsComponent.deletePost()");
          else throw error; //will be captured by our GlobalErrorHandler. (não é desse exemplo)
        });
  }
}
