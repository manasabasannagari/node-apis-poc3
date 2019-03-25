import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  authenticated: boolean;
  constructor() {
    const accessToken = localStorage.getItem('scribe-access-token');
    this.authenticated = (accessToken !== '' && accessToken) ? true : false;
  }
}
