import { ApiService } from './../api.service';
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
  succcessResponse: string = '';
  errorResponse: string = '';

  constructor(private service: ApiService) {}

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
    this.firstname =
      this.lastname =
      this.email =
      this.phonenumber =
      this.password =
        '';
  }

  createUser(): void {
    this.succcessResponse = this.errorResponse = '';
    this.service
      .createUser({
        fname: this.firstname,
        lname: this.lastname,
        phone: this.phonenumber,
        password: this.password,
        email: this.email,
      })
      .subscribe(
        (response) => {
          if(response.status === 200)
            this.succcessResponse = 'کاربر با موفقیت ثبت شد.';
          else this.errorResponse = 'مشکلی غیر منتظره پیش آمد لطفا دوباره تلاش کنید.'
        },
        (error) => {
          const {status} = error.status;
          this.errorResponse = 'خطایی حین قبت اطلاعات پیش آمد. لطفا داده های ورودی بخصوص شماره تلفن و ایمیل را بررسی و به درستی وارد کنید!';
          console.error('Error in POST request:', error);
        }
      );
  }

  getMessage(): string {
    return this.errorResponse ? this.errorResponse : this.succcessResponse ? this.succcessResponse : '';
  }
}
