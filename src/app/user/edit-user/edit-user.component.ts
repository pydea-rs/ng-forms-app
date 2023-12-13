import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  user = {
    id: -1,
    fname: '',
    lname: '',
    phone: '',
    email: '',
    password: '',
  };
  response = { success: '', error: '', warning: '' };
  constructor(private service: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.response.warning = 'لطفا تا بارگذاری اطلاعات منتظر بمانید...';
    const url = this.router.url.split('/');
    this.user.id = +url[url.length - 1];
    if (!isNaN(this.user.id)) {
      console.log(this.user.id);
      this.getUser();
    } else this.response.error = 'آیدی کاربر اشتباه است.';
  }

  onInputChange(event: Event, field: string): void {
    if (event && event.target) {
      const value = (event.target as HTMLInputElement).value;
      console.log(field, value);
      switch (field) {
        case 'firstname':
          this.user.fname = value;
          break;
        case 'lastname':
          this.user.lname = value;
          break;
        case 'phonenumber':
          this.user.phone = value;
          break;
        case 'email':
          this.user.email = value;
          break;
        case 'password':
          this.user.password = value;
          break;
      }
    }
  }

  resetInput(): void {
    this.user.fname =
      this.user.lname =
      this.user.email =
      this.user.phone =
      this.user.password =
        '';
  }

  getUser(): void {
    this.service.getUser(this.user.id).subscribe((data) => {
      this.user = data;
      console.log(this.user);
      this.user.password = '';
      this.resetResponse();
      this.response.success = 'اطلاعات با موفقیت بارگذاری شد.';
    });
  }

  submitEdit(): void {
    this.resetResponse();
    this.service.editUser(this.user).subscribe(
      (response) => {
        if (response.status === 200)
          this.response.success = 'کاربر با ویرایش ثبت شد.';
        else
          this.response.error =
            'مشکلی غیر منتظره پیش آمد لطفا دوباره تلاش کنید.';
      },
      (error) => {
        const { status } = error.status;
        this.response.error =
          'خطایی حین قبت اطلاعات پیش آمد. لطفا داده های ورودی بخصوص شماره تلفن و ایمیل را بررسی و به درستی وارد کنید!';
        console.error('Error in POST request:', error);
      }
    );
  }

  getResponse(): string {
    return this.response.error
      ? this.response.error
      : this.response.warning
      ? this.response.warning
      : this.response.success
      ? this.response.success
      : '';
  }

  resetResponse(): void {
    this.response = { success: '', error: '', warning: '' };
  }
}
