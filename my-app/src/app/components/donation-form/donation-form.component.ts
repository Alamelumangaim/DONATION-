import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-donation-form',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,ReactiveFormsModule,NgIf,ButtonModule,InputTextModule, ],
  templateUrl: './donation-form.component.html',
  styleUrl: './donation-form.component.css',
  providers:[HttpClient]
})
export class DonationFormComponent {
  donationForm = this.fb.group(
    {
      name:['',Validators.required],
      contact:['',Validators.required],
      address:['',Validators.required]
    }
  )
  constructor(private fb: FormBuilder,private http: HttpClient){}
    SubmitForm(){
      let postData = {
        "name":this.donationForm.value.name,
        "address":this.donationForm.value.address,
        "contact":this.donationForm.value.contact
      }
      console.log(this.donationForm.value);
      this.http.post("http://localhost:8080/api/v1/register/donorform",postData,{responseType:"text"}).subscribe(
        (response)=>console.log(response)
      )
    }
}
