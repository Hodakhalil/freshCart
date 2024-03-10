import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
   constructor(private _CartService: CartService  ,private _ToastrService:ToastrService) { }
  cartDetails: any = null;
 

  removeItem(id:string):void {
    this._CartService.removeCartItem(id).subscribe({
      next: (response) => {
        console.log(response.data);
        this.cartDetails = response.data
        this._ToastrService.error("removed Successfully")
        
        
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }
  
  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({

      next: (response) => {
        console.log(response.data);
        this.cartDetails=response.data
        
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }
  changeCount(id:string, count:number): void{
    if (count > 0) {
      this._CartService.UpdateCart(id, count).subscribe({
      next: (response) => {
        console.log(response);
        this.cartDetails=response.data
        
      },
      error: (err) => {
        console.log(err);
        
      }
    })
}
  }
  clear(): void{
    this._CartService.clearCart().subscribe({

      next: (response) => {
        console.log(response);
        if (response.message == 'success') {
          this.cartDetails = null;
        }
        
      }
    })
  }

}





