import { Component, OnInit } from '@angular/core';
import { Toast } from './toast.model';
import { ToastEnum } from './toast.enum';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-pkg-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  toasts: Toast[] = [];
  readonly types = ToastEnum;
  readonly checkIcon = faCheckCircle;
  readonly xIcon = faTimesCircle;

  constructor(private readonly toastService: ToastService) {}

  ngOnInit() {
    this.toasts = this.toastService.toasts;
  }

  delete(toast: Toast) {
    this.toastService.deleteToast(toast);
  }
}
