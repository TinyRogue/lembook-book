import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './view/book/book.component';
import { LoginComponent } from './view/book/login/login.component';
import { RegisterComponent } from './view/book/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'BookComponent' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
