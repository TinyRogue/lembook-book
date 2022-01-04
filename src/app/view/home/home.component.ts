import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../pkg/components/toast/toast.service';
import { ToastEnum } from '../../pkg/components/toast/toast.enum';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  constructor(
    private readonly _router: Router,
    private readonly _activeRoute: ActivatedRoute,
    private readonly _toast: ToastService
  ) {
    this._router
      .navigate(['discover'], { relativeTo: _activeRoute })
      .catch(() => {
        this._toast.makeToast({
          type: ToastEnum.danger,
          title: 'Uwaga!',
          text: 'Prosimy przeładować stronę.',
          hidden: false,
        });
      });
  }
}
