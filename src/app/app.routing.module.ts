import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './view/book/book.component';
import { HomeComponent } from './view/home/home.component';
import { DiscoverComponent } from './view/home/discover/discover.component';
import { MyShelfComponent } from './view/home/my-shelf/my-shelf.component';
import { HomeGuard } from './view/home/home.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'discover',
        component: DiscoverComponent,
      },
      {
        path: 'my-shelf',
        component: MyShelfComponent,
      },
    ],
    canActivate: [HomeGuard],
  },
  { path: '', component: BookComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
