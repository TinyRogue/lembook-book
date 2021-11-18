import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private readonly gqlService: RegisterService) {}

  ngOnInit(): void {}

  register(username: string, password: string) {
    this.gqlService.register({ username, password }).subscribe();
  }
}
