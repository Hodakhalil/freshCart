import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient: HttpClient) { }
  myHeaders: any = { token: localStorage.getItem('eToken') }


  
  addToCart(productId:string):Observable<any>{
  
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
      {
      
        productId: productId
      },
      {
        headers: this.myHeaders
          
      

      }
      
    )
  }

  
  getUserCart(): Observable<any>{
    
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart',
      {
      headers:this.myHeaders
    }
    )
  }

  removeCartItem(productId:string): Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {
        headers:this.myHeaders
      }
    )
  }

  UpdateCart(productId:string ,count:number): Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {
        
    "count": count
      },
      {
        headers:this.myHeaders
      }
      
    )
  }

  checkOut(cartId:string ,userData:object): Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {
        shippingAddress: userData
      },
      {
        headers:this.myHeaders
      }
      
    )
  }


 clearCart(): Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        headers:this.myHeaders
      }
    )
 }
  
  getallOrders(userId:string): Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)
  }

}

  


  


