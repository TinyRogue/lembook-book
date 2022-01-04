import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './view/book/book.component';
import { HomeComponent } from './view/home/home.component';
import { DiscoverComponent } from './view/home/discover/discover.component';
import { MyShelfComponent } from './view/home/my-shelf/my-shelf.component';

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
  },
  { path: '', component: BookComponent },
  { path: '', pathMatch: 'full', redirectTo: 'BookComponent' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
