import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class OrderService {

  // //versão 2: usando angular2-jwt - nao consegui fazer essa versão funcionar
  // descomentar no app.module.ts quando for usar essa versão
  constructor(private authHttp: AuthHttp, private http: Http) {}

  getOrders() {
    return this.authHttp.get('/api/orders')
      .map(response => response.json());
  }

  // //  versão 1: usando angular puro
  // constructor(private http: Http) {
  // }

  // getOrders() {
  //   let headers = new Headers();
  //   let token = localStorage.getItem('token');
  //   headers.append('Authorization', 'Bearer ' + token);
    
  //   let options = new RequestOptions({ headers: headers });

  //   return this.http.get('/api/orders', options)
  //     .map(response => response.json());
  // }
}
