import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class DataService {



  constructor(private url: string, private http: Http) { }

  getAll() {
    //return a Observable
    return this.http.get(this.url)
      .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .catch(this.handleError);
  }

  update(resource) {
    //return a Observable
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .catch(this.handleError);
  }


  /*
  No catch não chama this.handleError() e sim passa uma referência, observe que não tem o parênteses
  de quando chamamos um métodos
  */
  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .catch(this.handleError); //passa uma referência de handleError(...)
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
