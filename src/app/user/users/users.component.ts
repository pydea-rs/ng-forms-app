import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const data = this.getUsers();
    console.log(data);
  }

  getUsers(): void {
    this.http
      .get('https://interview-api.amerandish.com/users')
      .subscribe((data) => {
        if (data instanceof Array) {
          this.users = data;
        }
        console.log(this.users);
      });
  }
}
