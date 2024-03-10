import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { }
  userInfo:any
  baseUrl: string = `https://ecommerce.routemisr.com`;

  register(userData:object): Observable<any>{
    return this._HttpClient.post(this.baseUrl +`/api/v1/auth/signup`,userData)
  }
  
  login(userData:object): Observable<any>{
    return this._HttpClient.post(this.baseUrl +`/api/v1/auth/signin`,userData)
  }


  decodeUser(): void{
    
    const encode = localStorage.getItem('eToken');
    if (encode !== null) {
      const decode = jwtDecode(encode);
      this.userInfo = decode;
      console.log(decode);
      
    }
  }
}
