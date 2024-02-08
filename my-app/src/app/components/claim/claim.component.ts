import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { Donator } from '../../Donator';
import { HttpClient } from '@angular/common/http';
import { DonatorsService } from '../../services/donators.service';
import { Subscription, first } from 'rxjs';
import { response } from 'express';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {ThemePalette} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { NONE_TYPE } from '@angular/compiler';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-claim',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,NgFor,InputTextModule,ReactiveFormsModule,NgIf,MatCheckboxModule
    ,MatDatepickerModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatSlideToggleModule,MatSliderModule,MatNativeDateModule,ToastModule
  ,FooterComponent],
  templateUrl: './claim.component.html',
  styleUrl: './claim.component.css',
  providers:[DonatorsService,MessageService]
})
export class ClaimComponent {
  donations: any = []
  Myform =this.fb.group({
    to_name:['',Validators.required],
    contact:['',Validators.required],
    address:['',Validators.required],
    email:['',[Validators.required,Validators.email]]
  })
  @Output() claim: EventEmitter<Donator> = new EventEmitter();
  private donor: Donator[]=[];
  private routeSub: Subscription | undefined;
  data: any;
  to_email:any;
 private api="http://localhost:8080/api/v1/register/getdonationsbyid"
  constructor(private donatorService: DonatorsService,private http: HttpClient,private route: ActivatedRoute,private fb: FormBuilder,private messageService: MessageService){}
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.data= params['id'];
      
    });
    this.routeSub = this.route.params.subscribe(params=>{
      console.log(params);
      console.log(params['email']);
      this.to_email=params['email'];
    })
   /*  this.routeSub.unsubscribe(); */
    
    this.donatorService = this.data;
    
    this.http.get<any[]>(`${this.api}/${this.data}`).subscribe(
     
      (response: any)=>{
        this.donations=response;
        this.donations=Array.of(this.donations)
        console.log(this.donations);
      }
      
     
    );
    
 
}
show() {
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Requested Successfully' });
}
SubmitForm(){
 /*  emailjs.init("F3QtwuRGBdSauLj09");
  emailjs.send("service_s2g32uk","template_0p8rlvk",{
    from_name: "Hope Haven",
    to_name: this.Myform.value.to_name,
    subject: "Request",
    message: "You successfully requested to claim a donation.",
    });
    alert("Mail has been sent");
    this.Myform.reset(); */

    let postData = {
      "id":this.data,
      "name":this.Myform.value.to_name,
      "address":this.Myform.value.address,
      "email":this.Myform.value.email,
      "contact":this.Myform.value.contact
    }
    this.http.post("http://localhost:8080/api/v1/register/claimrequest",postData,{responseType:"text"}).subscribe(
      (response)=>console.log(response)
    );
    this.http.post(`http://localhost:8080/api/v1/register/maildonator/${this.to_email}/${this.Myform.value.to_name}/${this.Myform.value.contact}`,NONE_TYPE).subscribe(
      (response)=>console.log("this is the response")
    )
}

}