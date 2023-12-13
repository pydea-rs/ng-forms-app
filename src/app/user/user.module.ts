import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { UsersComponent } from './users/users.component';
import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [NewUserComponent, UsersComponent, EditUserComponent],
  imports: [CommonModule, UserRoutingModule, HttpClientModule],
})
export class UserModule {}
