import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RouterLink,RouterLinkActive,RouterOutlet,RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, response } from 'express';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule,InputTextModule,ReactiveFormsModule,ButtonModule,RouterLink,RouterLinkActive,
    RouterOutlet,CommonModule,RouterModule,HttpClientModule,ToastModule],
    providers:[MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',Validators.required]
  })
  constructor(private fb: FormBuilder,private http: HttpClient,private messageService: MessageService){}
  SubmitLogin(){
    let postData={
      "email":this.loginForm.value.email,
      "password":this.loginForm.value.password
    }
    this.http.post("http://localhost:8080/api/v1/register/login",postData).subscribe(
      (resultData: any)=>{
        console.log(resultData);
        console.log(resultData.message);
        if(resultData.message=="SUCCESS"){
          /* alert("Logged in successfully"); */
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Logged in Successfully' });
          console.log("LogIn Success");
          
        }
        else if(resultData.message=="USER NOT FOUND"){
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Email not exist' });
        }
        else if(resultData.message=="FAILED"){
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Log in Failed' });
        }
        else if(resultData.message="PASSWORD NOT MATCHED"){
          this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Password mismatched' });
        }
        
      }
    )
  }
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Logged in Successfully' });
}
}
