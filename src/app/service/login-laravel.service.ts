import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from './UserLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginLaravelService {
  loginUrl: string = "https://sistemapenitenciario.herokuapp.com/api/login"
  constructor(private httpc: HttpClient) { }
  loginUser(login_field: string, password: string) {

    let objectLogin: UserLogin = { login_field, password }
    return this.httpc.post<any>(this.loginUrl, objectLogin);
  }
}
