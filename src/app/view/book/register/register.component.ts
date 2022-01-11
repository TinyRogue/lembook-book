import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { namedRegexValidator } from '@pkg/validators/named-regex.validator';
import { ToastService } from '@pkg/components/toast/toast.service';
import { ToastEnum } from '@pkg/components/toast/toast.enum';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';
import { startLoading, stopLoading } from '../store/book.actions';
import { AppState } from '@store/app.reducer';
import { registerStart } from './store/register.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../action-page.scss', 'register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() loadingEmitter = new EventEmitter<boolean>();
  form: FormGroup | undefined;
  credentials = { email: '', password: '', repeatedPassword: '' };
  readonly faSad = faSadCry;
  private readonly _successToast = {
    type: ToastEnum.success,
    title: 'Sukces!',
    text: `Pomyślnie stworzono konto ${this.credentials.email}.`,
    hidden: false,
  };
  private readonly _errConnToast = {
    type: ToastEnum.danger,
    title: 'Brak odpowiedzi',
    text: 'Proszę spróbować później',
    hidden: false,
  };
  private readonly _errExistsToast = {
    type: ToastEnum.danger,
    title: 'Wystąpił błąd',
    text: 'Użytkownik już istnieje',
    hidden: false,
  };

  constructor(
    private readonly _toast: ToastService,
    private readonly _store: Store<AppState>
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(this.credentials.email, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(this.credentials.password, [
        Validators.required,
        Validators.minLength(10),
        namedRegexValidator(/\d/, { hasNumber: true }),
        namedRegexValidator(/[A-Z]/, { hasCapitalLetter: true }),
        namedRegexValidator(/[a-z]/, { hasMinorLetter: true }),
        namedRegexValidator(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/, {
          hasSpecialSign: true,
        }),
      ]),
      repeatedPassword: new FormControl(this.credentials.repeatedPassword, [
        Validators.required,
      ]),
    });

    this._store
      .select((state) => state.register)
      .subscribe((registerData) => {
        setTimeout(() => this._store.dispatch(stopLoading()), 500);
        if (registerData.authError?.networkError) {
          this._toast.makeToast(this._errConnToast);
        } else if (registerData.authError) {
          this._toast.makeToast(this._errExistsToast);
        } else if (registerData.success) {
          this._toast.makeToast(this._successToast);
        }
      });
  }

  register() {
    this.credentials = this.form!.getRawValue();
    if (
      this.form?.valid &&
      this.credentials.password === this.credentials.repeatedPassword
    ) {
      this._store.dispatch(startLoading());
      this._store.dispatch(
        registerStart({
          username: this.credentials.email,
          password: this.credentials.password,
        })
      );
    }
  }

  get email() {
    return this.form!.get('email');
  }

  get password() {
    return this.form!.get('password');
  }
}
