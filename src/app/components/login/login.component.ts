import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor(private _AuthService: AuthService,private _Router:Router) { }
  
  erMsg: string = '';
  isLoading:boolean=false

  loginForm: FormGroup = new FormGroup({
  
    email: new FormControl('', [Validators.required, Validators.email]),
    
    password: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
  
  
  }
  );

  handleForm():void {

    const userData = this.loginForm.value;
     this.isLoading = true;

    if (this.loginForm.valid === true) {
     
      this._AuthService.login(userData).subscribe({
        next:(response)=>{
          console.log(response);
          if (response.message == "success") {
            localStorage.setItem('eToken', response.token);
            this._AuthService.decodeUser();
            this.isLoading = false;
            this._Router.navigate(['/home']);
          }

        },
        error: (err) => {
          console.log(err);
          this.erMsg = err.error.message;
          this.isLoading = false;
        
          
        }
      })
    }
  }



  
  // handleForm():void {
    
  //   console.log(this.loginForm.value);

  //   if (this.loginForm.valid) {

  //     this.isLoading = true;
  //     this._AuthService.login(this.loginForm.value).subscribe({
  //     next: (response) => {
  //          console.log(response);
  //          if (response.message == "success") {
          
             
  //            this.isLoading = false;
  //            this._Router.navigate(['/home'])
            
  //          }
        
  //     },
  //     error:(err) => {
  //       console.log(err);
  //         this.isLoading = false;
  //       this.erMsg = err.error.message;
        
        
        
  //     }
  //   })
  //   }
   
    
  // }

}
