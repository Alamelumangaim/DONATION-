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
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule,InputTextModule,ReactiveFormsModule,ButtonModule,RouterLink,RouterLinkActive,
    RouterOutlet,CommonModule,RouterModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',Validators.required]
  })
  constructor(private fb: FormBuilder,private http: HttpClient){}
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
          alert("Logged in successfully");
          console.log("LogIn Success");
          
        }
        else if(resultData.message=="FAILED"){
          alert("Login failed");
        }
        else if(resultData.message="PASSWORD NOT MATCHED"){
          alert("Your password not matched with the email");
        }
        else if(resultData.message=="USER NOT FOUND"){
          alert("Email id does not exist");
        }
      }
    )
  }
}
