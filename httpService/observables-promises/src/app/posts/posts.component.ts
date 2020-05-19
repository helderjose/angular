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
    mudou de "response" para "posts"
  */
  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }


  constructor(private service: PostService) {
    //nunca chame um http server no construtor. Chame no ngOnInit()
  }

  /*
    Coloca o post no array e depois faz a chamado so service. Se der erro no server
    remove o post do array.
    Dúvidas: eu coloco o item no array, esse item ainda não tem id, como colocar id depois que o server responder?
  */
  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    this.posts.splice(0, 0, post); //coloca o novo post no index 0 do array de posts

    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id; //post['id'] vai criar o campo 'id' no let post
        }, 
      (error: AppError) => {
        this.posts.splice(0, 1); //remove o novo post do array se der falha.

        if(error instanceof BadInput) {
          // this.form.setErrors(error.originalError) //se tiver um reactive-forms no component.
        }
        else throw error; //will be captured by our GlobalErrorHandler
      });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  /*
    Passa null no subcribe  porque não tem mensagem de sucesso.
  */
  // deletePost(post) {
  //   let index = this.posts.indexOf(post);
  //   this.posts.splice(index, 1);

  //   // this.service.delete(345) //para simular o erro
  //   this.service.delete(post.id)
  //     .subscribe(
  //       null,
  //       (error: AppError) => {
  //         this.posts.splice(index, 0, post);
  //         if(error instanceof NotFoundError)
  //           alert("This post has already been deleted. PostsComponent.deletePost()");
  //         else throw error; //will be captured by our GlobalErrorHandler
  //       });
  // }

  /*
    Abra  a aba network para ver a chamada. Teste sem subscribe e com subscribe.
    No console só será mostrado o request do get post.
    There is no request to delete that post.
    With observables nothing happens until you subscribe to them. In other words,
    if you simply call the delete method here, our service is not going to
    call our backend. This will only happen when we call the subscribe method.
  */
  deletePost(post) {
    
    // this.service.delete(post.id); //sem subscribe nada acontece

    /*
      Chama a versao que retorna uma Promise.
      Como promise é eager, não sou obrigado usar ".then"
    */
    // this.service.delete(post.id); //posso chamar .then nessa chamada.

    //essa tbm tem que chamar a versão que retorna um Observable

    //chama a versao que retorna um Observable
    this.service.delete(post.id)
      .subscribe();
  }
}
