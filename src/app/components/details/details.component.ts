import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{ 
  constructor(private _ActivatedRoute: ActivatedRoute, private _ProductsService:ProductsService,private _CartService:CartService ,private _ToastrService:ToastrService) { }
  productId!: string | null
  
  productDetails: any = null
  
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next: (params)=>{
      
      this.productId = params.get('id');
      console.log(this.productId);
      
      }
  })
  this._ProductsService.getProductDetails(this.productId).subscribe({
    next: (response) => {
      console.log(response.data);
      this.productDetails = response.data;
      
    }
  })

}
   productSlider: OwlOptions  = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
     dots: false,
    autoplay:true,
    navSpeed: 700,
    navText: ['', ''],
   items:1,
    nav: true,
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
