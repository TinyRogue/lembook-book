import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from './login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@pkg/components/toast/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginStart } from './store/auth.actions';
import * as fromRoot from '@store/app.reducer';
import { startLoading } from '../store/book.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../action-page.scss', 'login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() loadingEmitter = new EventEmitter<boolean>();
  form: FormGroup | undefined;
  credentials = { email: '', password: '' };

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
