import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import {ThemePalette} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-donatorinfo',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,InputTextModule,ReactiveFormsModule,NgIf,MatSlideToggleModule,
    MatSliderModule,MatDatepickerModule,MatFormFieldModule,MatInputModule,MatNativeDateModule,MatCheckboxModule,MatRadioModule],
  templateUrl: './donatorinfo.component.html',
  styleUrl: './donatorinfo.component.css',
  providers:[HttpClient]
})
export class DonatorinfoComponent {
  donationdetails = this.fb.group({
    location:['',Validators.required],
    fooditem:['',Validators.required],
    expirydate:['',Validators.required],
    quantity:['',Validators.required],
    role:['',Validators.required],
    email:['',[Validators.required,Validators.email]]
  })
  constructor(private fb: FormBuilder,private http: HttpClient,){}
  SubmitForm(){
    console.log(this.donationdetails.value);
    let postData={
      "location":this.donationdetails.value.location,
      "fooditem":this.donationdetails.value.fooditem,
      "expirydate":this.convert(this.donationdetails.value.expirydate),
      "quantity":this.donationdetails.value.quantity,
      "role":this.donationdetails.value.role,
      "email":this.donationdetails.value.email
    }
   
    this.http.post("http://localhost:8080/api/v1/register/postdonate",postData).subscribe(
      (response)=>console.log(response)
    );
  }
  
  convert(str: any){
   
    var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
 return [date.getFullYear(), mnth, day].join("-");
  }
  
 
}
