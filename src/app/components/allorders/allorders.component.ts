import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit {
  constructor(private _CartService: CartService,private _AuthService:AuthService) { }
  orders:any[] = []
  
  ngOnInit(): void {
     
    this._AuthService.decodeUser()
    if (this._AuthService.userInfo.id != null) {
       this._CartService.getallOrders(this._AuthService.userInfo.id).subscribe({
    
    next: (response)=>{
      console.log(response);
      this.orders=response
      }
    })
    }
   
}


}
