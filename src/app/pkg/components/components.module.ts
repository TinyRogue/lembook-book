import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ToastComponent } from './toast/toast.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import * as toasts from '../../state/toast/toast.reducer';

@NgModule({
  declarations: [LoaderComponent, ToastComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    StoreModule.forFeature(toasts.toastFeatureKey, toasts.toastReducer),
  ],
  providers: [],
  exports: [LoaderComponent, ToastComponent],
})
export class ComponentsModule {}
