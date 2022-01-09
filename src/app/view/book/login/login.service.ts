import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { LoginReq } from '@models/login-req.json';

@Injectable()
export class LoginService {
  constructor() {}
  login(l: LoginReq) {}
}
