import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RegisterService } from './register.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize, tap } from 'rxjs/operators';
import { namedRegexValidator } from '../../../pkg/validators/named-regex.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../action-page.scss', 'register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() loadingEmitter = new EventEmitter<boolean>();
  form: FormGroup | undefined;
  credentials = { email: '', password: '', repeatedPassword: '' };

  constructor(private readonly gqlService: RegisterService) {}

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
      repeatPassword: new FormControl(this.credentials.repeatedPassword, [
        Validators.required,
      ]),
    });
  }

  register() {
    this.credentials = this.form!.getRawValue();
    if (this.form?.valid) {
      this.loadingEmitter.emit(true);
      this.gqlService
        .register({
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
