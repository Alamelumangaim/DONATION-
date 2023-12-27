import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-requestfood',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,ReactiveFormsModule,NgIf,InputTextModule,ButtonModule,HttpClientModule],
  templateUrl: './requestfood.component.html',
  styleUrl: './requestfood.component.css',

})
export class RequestfoodComponent {
    requestForm=this.fb.group(
      {
        "organizationname":['',Validators.required],
        "recipientname":['',Validators.required],
        "address":['',Validators.required],
        "requirements":['',Validators.required],
        
      }
    )
    constructor(private fb: FormBuilder,private http: HttpClient){}
    SubmitForm(){
      console.log(this.requestForm.value);
      let postData={
        "organizationname":this.requestForm.value.organizationname,
        "recipientname":this.requestForm.value.recipientname,
        "address":this.requestForm.value.address,
        "requirements":this.requestForm.value.requirements
      }
      this.http.post("http://localhost:8080/api/v1/register/donate",postData,{responseType:"text"}).subscribe(
        (response)=>{
          console.log(response);
        }
      )
    }
}
