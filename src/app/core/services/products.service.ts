import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient: HttpClient) { }
  baseUrl:string='https://ecommerce.routemisr.com'


  
  getProducts(): Observable<any>{
    return this._HttpClient.get(this.baseUrl + `/api/v1/products`)
  }
   
  grtCategories(): Observable<any>{
    return this._HttpClient.get(this.baseUrl + `/api/v1/categories`)
  }


   getProductDetails(id:string|null): Observable<any>{
    return this._HttpClient.get(this.baseUrl + `/api/v1/products/${id}`)
  }

  
  getAllBrands(): Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }
}
