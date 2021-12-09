import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ToastComponent } from './toast/toast.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LoaderComponent, ToastComponent],
  imports: [CommonModule, FontAwesomeModule],
  providers: [],
  exports: [LoaderComponent, ToastComponent],
})
export class ComponentsModule {}
