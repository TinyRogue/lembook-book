import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RegisterService } from './register.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize, tap } from 'rxjs/operators';
import { namedRegexValidator } from '../../../pkg/validators/named-regex.validator';
import { ToastService } from '../../../pkg/components/toast/toast.service';
import { ToastEnum } from '../../../pkg/components/toast/toast.enum';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';

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
    private readonly _gqlService: RegisterService,
    private readonly _toast: ToastService
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
  }

  register() {
    this.credentials = this.form!.getRawValue();
    console.log(this.credentials.password, this.credentials.repeatedPassword);
    console.log(
      this.credentials.password === this.credentials.repeatedPassword
    );
    if (
      this.form?.valid &&
      this.credentials.password === this.credentials.repeatedPassword
    ) {
      this.loadingEmitter.emit(true);
      this._gqlService
        .register({
          username: this.credentials.email,
          password: this.credentials.password,
        })
        .pipe(
          tap({
            next: async (data) => {
              this._toast.makeToast(this._successToast);
            },
            error: (data) => {
              if (data.networkError) {
                this._toast.makeToast(this._errConnToast);
              } else {
                this._toast.makeToast(this._errExistsToast);
              }
            },
          }),
          finalize(() => this.loadingEmitter.emit(false))
        )
        .subscribe();
    }
  }

  get email() {
    return this.form!.get('email');
  }

  get password() {
    return this.form!.get('password');
  }
}
