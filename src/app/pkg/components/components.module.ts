import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ToastComponent } from './toast/toast.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [LoaderComponent, ToastComponent, CardComponent],
  imports: [CommonModule, FontAwesomeModule],
  providers: [],
  exports: [LoaderComponent, ToastComponent, CardComponent],
})
export class ComponentsModule {}
