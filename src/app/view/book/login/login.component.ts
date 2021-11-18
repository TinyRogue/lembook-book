import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private readonly gqlService: LoginService) {}

  ngOnInit(): void {}

  login(username: string, password: string) {
    this.gqlService.login({ username, password }).subscribe();
  }
}
