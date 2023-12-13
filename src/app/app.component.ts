import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-app';
  clientPathPrefix = ""  // change this

  constructor(private router: Router) {}

  getNewUserLinkClassName(): string {
    return this.router.url.includes('/new') ? 'nav-link active' : 'nav-link';
  }

  getUsersLinkClassName(): string {
    return this.router.url.includes('/users') ? 'nav-link active' : 'nav-link';
  }

  getUsersRoute = () => this.clientPathPrefix + "/users";
  getCreateUserRoute = () => this.clientPathPrefix + "/new";
}
