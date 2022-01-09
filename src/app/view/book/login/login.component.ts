import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from './login.service';
import { finalize, tap } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@pkg/components/toast/toast.service';
import { ToastEnum } from '@pkg/components/toast/toast.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginStart, loginUser } from './store/auth.actions';
import * as fromRoot from '@store/app.reducer';

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
  }

  login() {
    this.credentials = this.form!.getRawValue();
    if (this.form?.valid) {
      this.loadingEmitter.emit(true);
      this._store.dispatch(
        loginStart({
          username: this.credentials.email,
          password: this.credentials.password,
        })
      );

      // this._gqlService
      //   .login({
      //     username: this.credentials.email,
      //     password: this.credentials.password,
      //   })
      //   .pipe(
      //     tap({
      //       next: async (fetchRes) => {
      //         this._store.dispatch(
      //           loginUser({
      //             username: this.credentials.email,
      //             expirationDate: new Date(
      //               new Date().getTime() + 60_000 * 60 * 24 * 7
      //             ),
      //             userUID: fetchRes.data!.login.res,
      //           })
      //         );
      //         this._toast.makeToast(this.successToast);
      //         await this.navToHomePage();
      //       },
      //       error: (data) => {
      //         if (data.networkError) {
      //           this._toast.makeToast(this.noSignalToast);
      //         } else {
      //           this._toast.makeToast(this.invalidDataToast);
      //         }
      //       },
      //     }),
      //     finalize(() => this.loadingEmitter.emit(false))
      //   )
      //   .subscribe();
    }
  }

  get email() {
    return this.form!.get('email');
  }

  get password() {
    return this.form!.get('password');
  }

  private async navToHomePage() {
    await this._router.navigate(['home'], {
      relativeTo: this._route,
    });
  }
}
