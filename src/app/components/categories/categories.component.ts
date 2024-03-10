import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(private _ProductsService:ProductsService) {
  
}

   categories: any[] = [];
  ngOnInit(): void {
    this._ProductsService.grtCategories().subscribe({
      next: (response) => {
        console.log(response.data);
        this.categories = response.data;
        }
      })
  }
}
