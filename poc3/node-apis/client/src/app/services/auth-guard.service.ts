import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private service: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const loggedIn = this.service.checkLogIn();
    if (!loggedIn) {
      this.router.navigate(['login']);
      return false;
    } else {
      return true;
    }
  }
}
