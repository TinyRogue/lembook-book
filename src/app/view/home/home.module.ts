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
import { ComponentsModule } from '@pkg/components/components.module';
import { DiscoverService } from './discover/discover.service';
import { HomeService } from './home.service';
import { HomeGuard } from './home.guard';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile/profile.service';
import { ProfileUtils } from './profile/profile.utils';
import { MyShelfService } from './my-shelf/my-shelf.service';
import { HomeUtils } from './home.utils';

@NgModule({
  declarations: [
    HomeComponent,
    MyShelfComponent,
    DiscoverComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatIconModule,
    MatButtonModule,
    ComponentsModule,
  ],
  providers: [
    DiscoverService,
    HomeService,
    MyShelfService,
    ProfileService,
    ProfileUtils,
    HomeUtils,
    HomeGuard,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
