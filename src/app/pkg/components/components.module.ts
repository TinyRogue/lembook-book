import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ToastComponent } from './toast/toast.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardContainerComponent } from './card-container/card-container.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LoaderComponent, ToastComponent, CardContainerComponent],
  imports: [CommonModule, FontAwesomeModule, MatButtonModule],
  providers: [],
  exports: [LoaderComponent, ToastComponent, CardContainerComponent],
})
export class ComponentsModule {}
