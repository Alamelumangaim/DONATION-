import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RouterOutlet,RouterLink,RouterLinkActive,RouterModule } from '@angular/router';
import { passwordMismatchValidator } from '../../password.mismatch.directive';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/auth';
import { response } from 'express';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,InputTextModule,ButtonModule,RouterOutlet,RouterLink,RouterLinkActive,RouterModule,ToastModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers:[AuthService,MessageService]
})
export class RegisterComponent {

    registerForm = this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    }
    )
    constructor(private fb: FormBuilder,private http: HttpClient,private messageService: MessageService){}
    SubmitForm(){
      let postData = {
        "name":this.registerForm.value.name,
        "email":this.registerForm.value.email,
        "password":this.registerForm.value.password
      }
      console.log(this.registerForm.value)
      this.http.post("http://localhost:8080/api/v1/register/adduser",postData,{responseType:"text"}).subscribe(
        (response)=>console.log(response),
      
      )
     /*  this.authservice.registerUser(postData as User).subscribe(
        (response)=>{
          console.log(response);
        }
      ) */
     
    }
    show(){
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Registered Successfully' });
    }

}
