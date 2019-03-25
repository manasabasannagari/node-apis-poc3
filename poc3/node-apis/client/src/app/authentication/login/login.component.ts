import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { validatePassword } from '../../validators/password-length';
import { validateEmail } from '../../validators/valid-email';
import { AuthService, AuthResponse } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(private fb: FormBuilder, private service: AuthService, private router: Router) {
    if (this.service.checkLogIn()) {
      this.router.navigate(['employees']);
    }
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, validateEmail]],
      password: ['', [Validators.required, validatePassword]]
    });
  }

  ngOnInit() {
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  loginSubmit() {
    const postData = this.loginForm.value;
    this.service.loginUser(postData)
      .subscribe((response: AuthResponse) => {
        if (response.auth) {
          localStorage.setItem('scribe-access-token', response.token);
          // this.router.navigate(['employees']);
          window.location.href = document.location.origin + '/employees';
        }
      });
  }
}
