import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '@pkg/components/toast/toast.service';
import { ToastEnum } from '@pkg/components/toast/toast.enum';
import * as fromRoot from '@store/app.reducer';
import { Store } from '@ngrx/store';
import { logoutUser } from '../book/login/store/auth.actions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  constructor(
    private readonly _router: Router,
    private readonly _activeRoute: ActivatedRoute,
    private readonly _toast: ToastService,
    private readonly _store: Store<fromRoot.AppState>
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

  async logout() {
    this._store.dispatch(logoutUser());
    this._toast.makeToast({
      type: ToastEnum.success,
      title: 'Wylogowano!',
      text: 'Wylogowano pomyślnie.',
      hidden: false,
    });
    await this._router.navigate(['/']);
  }
}
