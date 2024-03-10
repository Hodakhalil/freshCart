import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/core/interfaces/product';
import { WhishlistService } from 'src/app/core/services/whishlist.service';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,SearchPipe,FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private _ProductsService: ProductsService ,private _WhishlistService:WhishlistService ,private _CartService:CartService , private _ToastrService:ToastrService) { }
  products: Product[] = [];
  whishListData: string[] = [];
term:string=''
  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe(
    {
      next: (response) => {
        console.log(response.data);
        this.products = response.data;
        }
      }
    )


     this._WhishlistService.getWhishList().subscribe({

      next: (response)=>{
        console.log(response.data);
        const newData = response.data.map((item: any) => item._id)
      
        this.whishListData = newData;
        
        
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
      }
    })
  }

}
