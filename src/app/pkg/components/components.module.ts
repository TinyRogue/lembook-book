import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponenet } from './loader/loader.componenet';

@NgModule({
  declarations: [LoaderComponenet],
  imports: [CommonModule],
  providers: [],
  exports: [LoaderComponenet],
})
export class ComponentsModule {}
