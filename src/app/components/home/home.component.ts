import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import {  Product } from 'src/app/core/interfaces/product';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/core/interfaces/category';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WhishlistService } from 'src/app/core/services/whishlist.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CarouselModule,RouterLink,],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _ProductsService: ProductsService, private _CartService:CartService  , private _ToastrService:ToastrService ,private _WhishlistService:WhishlistService) { }


  products: Product[] = [];
  categories: Category[] = [];
  whishListData:string[]=[]

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (response)=>{
        // console.log(response.data);
        this.products = response.data;
        }
    })
    
    this._ProductsService.grtCategories().subscribe({
      next: response => {
        console.log(response.data);
        this.categories=response.data
        
      }
    })

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

   categoriesOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
     dots: false,
     autoplay: true,
     autoplaySpeed: 1000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
   }
  
  
     mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
     dots: true,
       autoplay: true,
       autoplaySpeed: 1000,
    navSpeed: 700,
    navText: ['', ''],
   items:1,
    nav: false,
    }

  

}
