import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  authType: string;
  constructor() {
    this.authType = 'login';
  }

  ngOnInit() {
  }

}
