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

@NgModule({
  declarations: [BookComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, AppRoutingModule, FontAwesomeModule],
  providers: [LoginService, RegisterService],
  exports: [BookComponent],
})
export class BookModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faBook, faUser, faKey);
  }
}
