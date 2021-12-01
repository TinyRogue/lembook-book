import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup | undefined;
  credentials = { email: '', password: '' };

  constructor(
    private readonly gqlService: LoginService,
    private readonly router: Router
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
      this.gqlService
        .login({
          username: this.credentials.email,
          password: this.credentials.password,
        })
        .pipe(
          tap({
            next: async (data) => {
              console.log(data);
              await this.router.navigate(['/']);
            },
            error: (data) => {
              console.log(data);
            },
          })
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
