import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhishlistService } from 'src/app/core/services/whishlist.service';
import { Product } from 'src/app/core/interfaces/product';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-whishlist',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.scss']
})
export class WhishlistComponent implements OnInit{
  constructor(private _WhishlistService: WhishlistService ,private _ToastrService:ToastrService ,private _CartService:CartService) { }
  products: Product[] = [];
  whishListData: string[] = []
  
ngOnInit(): void {
  this._WhishlistService.getWhishList().subscribe({
    next: (response) => {
      console.log(response);
      this.products = response.data
       const newData = response.data.map((item: any) => item._id)
      
        this.whishListData = newData;
      
      }
    })
}
  
    addFav(proId:string): void{
    this._WhishlistService.addtoWhishList(proId).subscribe({
      next: (reponse) => {
        console.log(reponse);
        this._ToastrService.success(reponse.message)
         this.whishListData = reponse.data;
        
      }
    })
  }
  removeFav(prodId:string|undefined): void{
    this._WhishlistService.removeWhishList(prodId).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message)
        this.whishListData = response.data;

        this._WhishlistService.getWhishList().subscribe({
          next: (response) => {
            this.products=response.data
          }
        })
      }
    })
  }
  
  addCart(id:string): void{
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message)
        
      }
      ,
      error: (err) => {
        console.log(err);
        
      }
    })
  }
}
