import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService extends DataService {

  // private url = 'http://jsonplaceholder.typicode.com/posts';

  //simula uma falha no servico (network is down)
  // private url = 'http://abcdjsonplaceholder.typicode.com/posts';

  constructor(http: Http) {
    super('http://jsonplaceholder.typicode.com/posts', http);
  }
}
