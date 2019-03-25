import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { validatePassword } from '../../validators/password-length';
import { validateEmail } from '../../validators/valid-email';
import { AuthService, AuthResponse } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;
  constructor(private fb: FormBuilder, private service: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, validateEmail]],
      password: ['', [Validators.required, validatePassword]]
    });
  }

  ngOnInit() {
  }

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  loginSubmit() {
    const postData = this.registerForm.value;
    this.service.registerUser(postData)
      .subscribe((response: AuthResponse) => {
        if (response.auth) {
          localStorage.setItem('scribe-access-token', response.token);
          // this.router.navigate(['employees']);
          window.location.href = document.location.origin + '/employees';
        }
      });
  }
}
