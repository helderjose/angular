import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }


  /*
    we can use one of the global, helper functions provided by Angular2-jwt, so
    a function is called, tokenNotExpired
  */
  isLoggedIn() {
    return tokenNotExpired();
  }

  // essa versão é só para mostrar o funcionamento por trás do framework
  // isLoggedIn() {

  //   let jwtHelper = new JwtHelper();
  //   let token = localStorage.getItem('token');

  //   if (!token)
  //     return false;

  //   let expirationDate = jwtHelper.getTokenExpirationDate(token);
  //   let isExpired = jwtHelper.isTokenExpired(token);

  //   console.log("Expiration: ", expirationDate);
  //   console.log("isExpired: ", isExpired);

  //   return !isExpired;
  // }







  // para baixo é dos exemplos antigos

  login(credentials) { 
    return this.http.post('/api/authenticate', 
       JSON.stringify(credentials))
       .map(response => {
         let result = response.json();
         if(result && result.token) {
           localStorage.setItem('token', result.token);
           console.log(response.json());
           return true;
         }
 
         console.log(response.json());
         return false;
       });
   }
 
   logout() {
     localStorage.removeItem('token');
   }
}

