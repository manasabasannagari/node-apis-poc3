import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  AuthToken = localStorage.getItem('scribe-access-token');
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Auth Interceptors called!');
    if (this.AuthToken !== '' && this.AuthToken) {
      const authReq = req.clone({
        headers: req.headers.set('x-access-token', this.AuthToken)
      });
      console.log('x-access-token: ', authReq.headers.get('x-access-token'));
      return next.handle(authReq);
    } else {
      console.log('No scribe access token has been set!');
      return next.handle(req);
    }
  }
}
