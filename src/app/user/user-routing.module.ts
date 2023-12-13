import { EditUserComponent } from './edit-user/edit-user.component';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'new', loadChildren: () => import('./new-user/new-user.module').then(m => m.NewUserModule) },
  { path: 'new', component: NewUserComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: EditUserComponent },

  { path: '', redirectTo: '/new', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
