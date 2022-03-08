import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LogoutLaravelService {
  logoutUrl: string = "https://sistemapenitenciario.herokuapp.com/api/logout"
  constructor(private httpc: HttpClient) { }
  logoutUser(token: any) {
   let tokenBearer='Bearer ' + token;
   let reqHeader = new HttpHeaders({'Authorization':tokenBearer});
   let data={}
    return this.httpc.post(this.logoutUrl,data, {headers:reqHeader});
  }
}
