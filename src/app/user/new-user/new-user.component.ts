import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  firstname: string = '';
  lastname: string = '';
  phonenumber: string = '';
  email: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  onInputChange(event: Event, field: string): void {
    if (event && event.target) {
      const value = (event.target as HTMLInputElement).value;
      console.log(field, value);
      switch (field) {
        case 'firstname':
          this.firstname = value;
          break;
        case 'lastname':
          this.lastname = value;
          break;
        case 'phonenumber':
          this.phonenumber = value;
          break;
        case 'email':
          this.email = value;
          break;
        case 'password':
          this.password = value;
          break;
      }
    }
  }

  resetInput(): void {
    this.firstname = this.lastname = this.email = this.phonenumber = this.password = '';
  }


}
