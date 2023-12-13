import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  constructor(private service: ApiService, private router: Router) {}
  page: number = 0;
  maxNumberOfPage: number = 0;
  maxNumberOfRowsInPage: number = 8;

  ngOnInit(): void {
    const data = this.getUsers();
    console.log(data);
  }

  getUsers(): void {
    this.service.getUsers().subscribe((data) => {
      if (data instanceof Array) {
        this.users = data;
        this.maxNumberOfPage = (((this.users.length - 1) / this.maxNumberOfRowsInPage) | 0) + 1;
      }
      console.log(this.users);
    });
  }

  getPage = () => this.users.slice(this.page * this.maxNumberOfRowsInPage, (this.page + 1) * this.maxNumberOfRowsInPage);

  nextPage = () => {
    if ((this.page + 1) < this.maxNumberOfPage) this.page = this.page + 1;
  };

  previousPage = () => {
    if (this.page > 0) this.page--;
  };

  onUserClick(user_id: number) {
    console.log("clicked", user_id);
    this.router.navigate([`/users/${user_id}`]);
  }
}
