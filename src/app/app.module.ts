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
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
