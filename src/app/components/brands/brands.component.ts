import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
constructor(private _ProductsService:ProductsService){}


  
  brands: any[] = [];
  ngOnInit(): void {
    this._ProductsService.getAllBrands().subscribe({
      next: (resonse) => {
        console.log(resonse.data);
        this.brands = resonse.data;
      },
      error: (err) => {
        console.log(err);
        
      }
      })
  }
}
