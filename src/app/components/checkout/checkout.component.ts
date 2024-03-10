import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
  
})
export class CheckoutComponent {

  constructor(private _FormBuilder: FormBuilder, private _ActivatedRoute: ActivatedRoute ,private _CartService:CartService) { }
  cartId: any = '';
  checkout: FormGroup = this._FormBuilder.group({
    details: [''],
    phone: [''],
    city:[''],
  })

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
        
      next: (param) => {
        console.log(param.get('id'));
        this.cartId = param.get('id');
      }
      })
  }
  handleForm() {
    console.log(this.checkout.value);
    this._CartService.checkOut(this.cartId, this.checkout.value).subscribe({
      next: (response) => {
        console.log(response);
        if (response.status == "success") {
          window.open(response.session.url ,'_self')
        }
        
      }
    })
    
  }
}



