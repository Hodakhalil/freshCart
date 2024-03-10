import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ForgetpasswordService } from 'src/app/core/services/forgetpassword.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {
  constructor(private _ForgetpasswordService: ForgetpasswordService,private _Router:Router) { }
  email: string = ''
  userMsg:string=''

  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;

  forgetPassword: FormGroup = new FormGroup({
    email: new FormControl('')
  })

   resetCodeForm: FormGroup = new FormGroup({
     resetCode: new FormControl('')
     
   })
  
   resetPassword: FormGroup = new FormGroup({
     
     newPassword:new FormControl('')
     
   })
  
  
  forgetCode():void{
    let userEmail = this.forgetPassword.value;
    this.email = userEmail.email;
    this._ForgetpasswordService.forgetPassword(userEmail).subscribe({
      next: (response) => {
        console.log(response);
        this.userMsg = response.message;
        this.step1 = false;
        this.step2 = true;
        
      },
      error: (err) => {
        this.userMsg=err.console.error.message
        
      }
    })
  }

  resetCodePass(): void{
    let resetcode = this.resetCodeForm.value;
    this._ForgetpasswordService.restCode(resetcode).subscribe({
      next: (response) => {
        console.log(response);
        this.userMsg = response.status
        this.step2 = false;
        this.step3=true
        
      },
      error: (err) => {
        this.userMsg=err.console.error.message
        
      }

    })
  }


  resetPasswordd(): void{
    let resetPass = this.resetPassword.value
    resetPass.email = this.email
    this._ForgetpasswordService.restpassword(resetPass).subscribe({
      next: (response) => {
        console.log(response);
        if (response.token) {
          localStorage.setItem('eToken', response.token);
          this._Router.navigate(['/home'])
        }
        
      },
       error: (err) => {
        this.userMsg=err.console.error.message
        
      }

    })
}}
