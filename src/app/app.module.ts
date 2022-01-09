import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookModule } from './view/book/book.module';
import { AppRoutingModule } from './app.routing.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './pkg/components/components.module';
import { HomeModule } from './view/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './view/book/login/store/auth.reducer';

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
    StoreModule.forRoot({ auth: authReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
