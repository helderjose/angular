import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/retry';

@Injectable()
export class DataService {



  constructor(private url: string, private http: Http) { }

  /*
    + linha do map
      - So we are mapping or transforming this response object to an array of JavaScript objects.
  */
  getAll() {
    return this.http.get(this.url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  create(resource) {
    //simula um erro no servidor. Fazer um com delay para simular melhor.
    return Observable.throw(new AppError());

    // return this.http.post(this.url, JSON.stringify(resource))
    //   .map(response => response.json())
    //   .catch(this.handleError);
  }

  update(resource) {
    //return a Observable
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .map(response => response.json())
      .catch(this.handleError);
  }


  /*
  No catch não chama this.handleError() e sim passa uma referência, observe que não tem o parênteses
  de quando chamamos um métodos
  */
  delete(id) {

    //retorna uma promise
    // return this.http.delete(this.url + '/' + id)
    //   .map(response => response.json())
    //   .toPromise()
    //   .catch(this.handleError);
    
    //retorna um observable
    return this.http.delete(this.url + '/' + id)
      .map(response => response.json())
      .retry(3)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400)
      //retorna error.json porque tem informações sobre os campos inválidos
      return Observable.throw(new BadInput(error.json()));
    
      if(error.status === 404)
      return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }
}
