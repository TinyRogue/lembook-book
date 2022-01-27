import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookModule } from './view/book/book.module';
import { AppRoutingModule } from './app.routing.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '@pkg/components/components.module';
import { HomeModule } from './view/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import * as fromRoot from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './view/book/login/store/auth.effects';
import { RegisterEffects } from './view/book/register/store/register.effects';
import { DiscoverEffects } from './view/home/discover/store/discover.effects';
import { ProfileEffects } from './view/home/profile/store/profile.effects';
import { MyShelfEffects } from './view/home/my-shelf/store/my-shelf.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BookModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    ComponentsModule,
    HomeModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(fromRoot.appReducer),
    EffectsModule.forRoot([
      AuthEffects,
      RegisterEffects,
      DiscoverEffects,
      MyShelfEffects,
      ProfileEffects,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
