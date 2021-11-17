import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { UserReq } from '@models/user-req.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private readonly gqlService: RegisterService) {}

  ngOnInit(): void {}

  register(username: string, password: string) {
    const u: UserReq = { username, password };
    this.gqlService.register({ username, password }).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
}
