import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { UsersComponent } from './users/users.component';
import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NewUserComponent, UsersComponent],
  imports: [CommonModule, UserRoutingModule, HttpClientModule],
})
export class UserModule {}
