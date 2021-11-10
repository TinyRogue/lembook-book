import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {BookComponent} from "./book.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    BookComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [
    BookComponent,
  ]
})
export class BookModule { }
