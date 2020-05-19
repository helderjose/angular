import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

constructor(
  protected router: Router,
  protected authService: AuthService) { }
 
  canActivate() {
    if (this.authService.isLoggedIn()) return true;

    this.router.navigate(['/login']);
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }

  /*
  Essa  versão redireciona para a tela de admin ao logar, não funcionou porque
  no "admin-auth-guard.servite.ts" tem uma chamada para "canActivate" que não passa parâmetro
  */
  // canActivate(route, state: RouterStateSnapshot) {
  //   if (this.authService.isLoggedIn()) return true;

  //   this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
  //   return false;
  // }

  
}

