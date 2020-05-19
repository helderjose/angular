import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  /*
    Se o usuário logado não for admin, redireciona para a página "Access Denied".
  */
  canActivate() {
    let user = this.authService.currentUser;

    if (user && user.admin) return true;

    this.router.navigate(['/no-access']); //no-access está no app.module.ts
    return false;
  }
}
