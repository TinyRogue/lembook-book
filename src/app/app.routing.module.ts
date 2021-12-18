import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './view/book/book.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: BookComponent },
  { path: '', pathMatch: 'full', redirectTo: 'BookComponent' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
