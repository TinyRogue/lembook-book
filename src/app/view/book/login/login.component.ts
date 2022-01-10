import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from './login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@pkg/components/toast/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginStart } from './store/auth.actions';
import * as fromRoot from '@store/app.reducer';
import { startLoading, stopLoading } from '../store/book.actions';
import { ToastEnum } from '@pkg/components/toast/toast.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../action-page.scss', 'login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() loadingEmitter = new EventEmitter<boolean>();
  form: FormGroup | undefined;
  credentials = { email: '', password: '' };

  private readonly successToast = {
    type: ToastEnum.success,
    title: 'Zalogowano!',
    text: 'Misja zakończona sukcesem',
    hidden: false,
  };
  private readonly noSignalToast = {
    type: ToastEnum.danger,
    title: 'Brak odpowiedzi',
    text: 'Proszę spróbować później',
    hidden: false,
  };
  private readonly invalidDataToast = {
    type: ToastEnum.danger,
    title: 'Niepoprawne dane',
    text: 'Spróbuj jeszcze raz',
    hidden: false,
  };

  constructor(
    private readonly _gqlService: LoginService,
    private readonly _toast: ToastService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _store: Store<fromRoot.AppState>
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(this.credentials.email, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(this.credentials.password, [
        Validators.required,
      ]),
    });

    this._store
      .select((state) => state.auth)
      .subscribe(async (authData) => {
        console.log(`Im done with`);
        console.log(authData);
        setTimeout(() => this._store.dispatch(stopLoading()), 500);
        if (authData.authError?.networkError) {
          this._toast.makeToast(this.noSignalToast);
        } else if (authData.authError) {
          this._toast.makeToast(this.invalidDataToast);
        }

        if (authData?.userUID) {
          this._toast.makeToast(this.successToast);
          await this._router.navigate(['home'], {
            relativeTo: this._route,
          });
        }
      });
  }

  login() {
    this.credentials = this.form!.getRawValue();
    if (this.form?.valid) {
      this._store.dispatch(startLoading());
      this._store.dispatch(
        loginStart({
          username: this.credentials.email,
          password: this.credentials.password,
        })
      );
    }
  }
}
