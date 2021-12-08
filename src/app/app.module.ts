import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookModule } from './view/book/book.module';
import { AppRoutingModule } from './app.routing.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './pkg/components/components.module';
import { StoreModule } from '@ngrx/store';
import { toastReducer } from './state/toast/toast.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BookModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    ComponentsModule,
    StoreModule.forRoot({
      toastFeature: toastReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
