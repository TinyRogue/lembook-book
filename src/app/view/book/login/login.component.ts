import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from './login.service';
import { finalize, tap } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../action-page.scss', 'login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() loadingEmitter = new EventEmitter<boolean>();
  form: FormGroup | undefined;
  credentials = { email: '', password: '' };

  constructor(private readonly _gqlService: LoginService) {}

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
      this._gqlService
        .login({
          username: this.credentials.email,
          password: this.credentials.password,
        })
        .pipe(
          tap({
            next: async (data) => {
              console.log(data);
            },
            error: (data) => {
              console.log(data);
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
