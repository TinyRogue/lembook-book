import { ToastEnum } from './toast.enum';

export interface Toast {
  type: ToastEnum;
  hidden: boolean;
  title: string | undefined;
  text: string | undefined;
}
