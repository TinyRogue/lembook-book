import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from '../../app.routing.module';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faBook, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../pkg/components/components.module';
import { StoreModule } from '@ngrx/store';
import { discoverBooksReducer } from '../home/discover/state-manager/users-books.reducer';

@NgModule({
  declarations: [BookComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ComponentsModule,
    StoreModule.forFeature('loginFeature', {
      loginMetadata: discoverBooksReducer,
    }),
  ],
  providers: [LoginService, RegisterService],
  exports: [BookComponent],
})
export class BookModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faBook, faUser, faKey);
  }
}
