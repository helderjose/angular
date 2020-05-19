import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent {

  constructor(private router: Router) { }

  submit() {
    /*
      this.router.navigate(['/followers', 1, 2, 3])
      '/followers'   url
      1, 2, 3   parâmetros
    */
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    })
  }

}
