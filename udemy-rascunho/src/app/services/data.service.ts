import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw'  //exemplo: Observable Operators and Factory Methods

@Injectable()
export class DataService {


  //simula uma falha no servico (network is down)
  // private url = 'http://abcdjsonplaceholder.typicode.com/posts';

  constructor(private url: string, private http: Http) { }

  /*
  http.get, http.post, http.patch e http.delete retornam um Observable
  */

  getAll() {
    return this.http.get(this.url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  create(resource) {
    //simula uma resposta com erro do servidor
    // return Observable.throw(new AppError());

    return this.http.post(this.url, JSON.stringify(resource))
    .map(response => response.json())
      .catch(this.handleError);
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
    .map(response => response.json())
      .catch(this.handleError);
  }

  /*
  converte para promisses para o exemplo "observables vs promises.".
  - import 'rxjs/add/operator/toPromise';
  - .toPromise()
  - vá para posts.component.ts deletePost(...){...}

  .retry(3) se o serviço falhar tenta 3 vezes
  */
  delete(id) {
    return this.http.delete(this.url + '/' + id)
    .map(response => response.json())
      .toPromise()
      // .retry(3) /* pesquisar sobre retry */
      .catch(this.handleError);//nao chama o metodo, apenas passa a referencia por isso nao tem () parenteses
  }

  /*
  app/common/app-error.ts
  app/common/not-found-error.ts

  erros do server fica no service (404 e etc) e retorna o erro
  da aplicação (NotFoundError e etc) para o component
  */
  // delete(id) {
  //   // return Observable.throw(new AppError()); //simla um erro no serviço

  //   return this.http.delete(this.url + '/' + id)
  //   .map(response => response.json())
  //     .catch(this.handleError);//nao chama o metodo, apenas passa a referencia por isso nao tem () parenteses
  // }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));

    if (error.status === 404)
      return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }
}
