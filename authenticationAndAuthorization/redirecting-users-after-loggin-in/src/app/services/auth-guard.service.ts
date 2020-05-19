import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  /*
    Será chamado quando acessar uma url que usa o "canActivate"
    no "app.module.ts"
  */
  canActivate(route, state: RouterStateSnapshot) {
    console.log("state.url: ", state.url);
    
    if (this.authService.isLoggedIn()) return true;

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
