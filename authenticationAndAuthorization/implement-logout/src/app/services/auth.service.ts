import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }


  logout() {
    localStorage.removeItem('token');
  }




  
  // para baixo é dos exemplos anteriores

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

  

  isLoggedIn() { 
    return false;
  }
}

