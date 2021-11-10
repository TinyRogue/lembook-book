import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {BookComponent} from "./book.component";


@NgModule({
  declarations: [
    BookComponent,
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
