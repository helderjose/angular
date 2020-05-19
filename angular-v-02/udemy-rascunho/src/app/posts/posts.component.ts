import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';


/*
- import HttpModule no app.module.ts.

- crie um service: ng g s app/services/post
- coloque "PostService" nos prividers do app.module.ts

*/
@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  

  constructor(private service: PostService) {
    
  }

  //evite chamar serviço http no construtor
  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => {
        // console.log(response);
        // console.log(response.json());
        this.posts = posts;
      });
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    this.posts.splice(0, 0, post); //coloca o post no array assim que apertar enter, se der falha no server removemos depois

    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
          // this.posts.splice(0, 0, post); // só coloca o post no array depois que o server responder com sucesso.  "delay"
          // console.log(response);
          // console.log(response.json());
      },
      (error: AppError) => {
        this.posts.splice(0, 1); //remove o post do array se der falha no servidor

        if(error instanceof BadInput) {
          // this.form.setErrors(error.originalError); //caso tenha um reactive form   //versao 2
          // this.form.setErrors(error.json()); //caso tenha um reactive form  //versao 1
        }
        else throw error;
      });
  }

  /*
  - patch: consigo atualizar apenas uma propriedade do objeto.
  - put: atualiza o objeto todo.

  Cria uma nova propriedade "isRead" no objeto post, olhar o retorno no
  console e a aba network
  */
  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost); //versao 2
          // console.log(updatedPost.json()); //versao 1
      });
    // this.http.put(this.url, JSON.stringify(post))
  }


  /*
  teste do exemplo Observables vs Promises
  */
  deletePost(post) {

    //alterado para usar promisse retornada no delete do data.service.ts
    //tbm posso usar .then e .catch quando é retornado uma promisse, mas nesse exemplo não usamos .then nem .catch
    this.service.delete(post.id);


    //assim consegue chamar o serviço, quano usamos observable
    // this.service.delete(post.id)
    //   .subscribe();

      
    // this.service.delete(post.id);//nao consegue chamar o servico assim
  }

  /*
  http delete nao tem corpo

  exemplo: handing expected erros

  - app-error-handler.ts
  */
  // deletePost(post) {
  //   let index = this.posts.indexOf(post);
  //   this.posts.splice(index, 1); // remove o post imediatamente

  //   this.service.delete(post.id)
  //   // this.service.delete(345) // simula apagar um post que nao existe, delete um post na tela
  //     .subscribe(
  //       null,
  //     (error: AppError) => {
  //       this.posts.splice(index, 0, post);//se o server responder com erro coloca o post de volta no array
  //       // post nao existe - 404
  //       if(error instanceof NotFoundError)
  //         alert("This post has already been deleted");
  //       else throw error;
  //     });
  // }
}
