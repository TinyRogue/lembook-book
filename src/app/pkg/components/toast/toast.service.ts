import { Injectable } from '@angular/core';
import { Toast } from './toast.model';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly _toasts: Toast[] = [];

  makeToast(toast: Toast, duration = 2000) {
    this._toasts.push(toast);
    setTimeout(() => this.deleteToast(toast), duration);
  }

  get toasts(): Toast[] {
    return this._toasts;
  }

  deleteToast(toast: Toast) {
    toast.hidden = true;
    setTimeout(() => this._toasts.splice(this._toasts.indexOf(toast), 1), 500);
  }
}
