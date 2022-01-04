import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app.routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { MatRippleModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MyShelfComponent } from './my-shelf/my-shelf.component';
import { DiscoverComponent } from './discover/discover.component';

@NgModule({
  declarations: [HomeComponent, MyShelfComponent, DiscoverComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  exports: [HomeComponent],
})
export class HomeModule {}
