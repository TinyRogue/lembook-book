import { ToastType } from './toast-type';

export class Toast {
  type: ToastType;
  hidden = false;
  readonly title: string | undefined;
  readonly text: string | undefined;
  readonly defaultDuration = 500;

  constructor(type: ToastType, title?: string, text?: string) {
    this.type = type;
    this.title = title;
    this.text = text;
  }
}
