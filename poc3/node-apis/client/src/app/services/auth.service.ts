import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = environment.baseURL;
  constructor(private http: HttpClient, private router: Router) { }

  checkLogIn() {
    const JWT = localStorage.getItem('scribe-access-token');
    return (JWT !== '' && JWT) ? true : false;
  }
  registerUser(data) {
    return this.http.post(`${this.baseURL}/auth/register`, data);
  }
  loginUser(data) {
    return this.http.post(`${this.baseURL}/auth/login`, data);
  }
}

export interface AuthResponse {
  auth: string;
  token: string;
}
