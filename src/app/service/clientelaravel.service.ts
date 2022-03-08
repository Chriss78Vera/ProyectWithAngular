import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ward } from './Wards';

@Injectable({
  providedIn: 'root'
})
export class ClientelaravelService {

  wardsUrl: string = "https://sistemapenitenciario.herokuapp.com/api/wards"
  constructor(private httpc: HttpClient) { }

  getWards(): Observable<Ward[]> {
    return this.httpc.get<Ward[]>(this.wardsUrl)
  }

  addWard(name: string, location: string, description: string) {

    let objectWard: Ward = { name, location, description }
    let token :any;
     token =localStorage.getItem('tokenUser');
     let tokenBearer='Bearer ' + token;
     console.log("tokenuser",tokenBearer)
    let reqHeader = new HttpHeaders({'Authorization':tokenBearer});

    return this.httpc.post(this.wardsUrl, objectWard,{headers:reqHeader});
  }
  updateWard(name: string, location: string, description: string, idWard: any) {
    let token :any;
    let objectWard: Ward = { name, location, description }
     token =localStorage.getItem('tokenUser');
     let tokenBearer='Bearer ' + token;
     console.log("tokenuser",tokenBearer)
    let reqHeader = new HttpHeaders({'Authorization':tokenBearer});
    
    return this.httpc.put(`${this.wardsUrl}/${idWard}`, objectWard,{headers:reqHeader});
  }


  getWardById(idWard: any) {
    let token :any;
     token =localStorage.getItem('tokenUser');
     let tokenBearer='Bearer ' + token;
     console.log("tokenuser",tokenBearer)
     let reqHeader = new HttpHeaders({'Authorization':tokenBearer});
    return this.httpc.get<Ward>(`${this.wardsUrl}/${idWard}`,{headers:reqHeader});

  }

  deleteWard(idWard: any) {
    let token :any;
     token =localStorage.getItem('tokenUser');
     let tokenBearer='Bearer ' + token;
     console.log("tokenuser",tokenBearer)
    let reqHeader = new HttpHeaders({'Authorization':tokenBearer});
    return this.httpc.delete(`${this.wardsUrl}/${idWard}`, {headers:reqHeader})
  }

}
