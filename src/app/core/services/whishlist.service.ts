import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {
 
  constructor(private _HttpClient: HttpClient) { }

  myHeaders: any = { token: localStorage.getItem('eToken') };
   baseUrl: string = `https://ecommerce.routemisr.com/api/v1/`;
  addtoWhishList(proId:string): Observable<any>{
    return this._HttpClient.post(this.baseUrl +`wishlist`,
      
      {
        productId: proId
      },
      {
        headers: this.myHeaders
      }
    )
  }
  getWhishList(): Observable<any>{
    return this._HttpClient.get(this.baseUrl +`wishlist`,
      
    {
        headers: this.myHeaders
      }
    )
  }
   removeWhishList(proId:string|undefined): Observable<any>{
    return this._HttpClient.delete(this.baseUrl +`wishlist/${proId}`,
      
    {
        headers: this.myHeaders
      }
    )
  }
}
