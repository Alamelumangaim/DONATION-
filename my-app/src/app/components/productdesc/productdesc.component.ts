import { Component, Input } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { NgFor } from '@angular/common';
import {InputNumberModule} from 'primeng/inputnumber';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-productdesc',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,NgFor,InputNumberModule,FormsModule,MatSelectModule,
    MatFormFieldModule,MatInputModule,ReactiveFormsModule,ToastModule],
  providers:[ProductsService,MessageService],
  templateUrl: './productdesc.component.html',
  styleUrl: './productdesc.component.css'
})
export class ProductdescComponent {
  reviewForm = this.fb.group(
    {
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      review:['',Validators.required]
    }
  )
  value1: number = 1;
  private routeSub: Subscription | undefined;
  private api = "http://localhost:8080/api/v1/register/getTrend";
  data: any;
  products: Product[] = [];
  trendproducts: any =[];
  constructor(private route: ActivatedRoute,private productService: ProductsService,private http: HttpClient,private fb: FormBuilder,private messageService: MessageService){}
  ngOnInit(){
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.data= params['id'];
      
    });
    this.http.get<any[]>(`${this.api}/${this.data}`).subscribe(
      (response: any)=>{
        this.trendproducts=response;
        this.trendproducts=Array.of(this.trendproducts);
        console.log(this.trendproducts);
        let postData ={
          "name":this.trendproducts[0].name,
          "price":this.trendproducts[0].price
        }
      }
    )
  }
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Added to cart' });
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.data= params['id'];
      
    });
    this.http.get<any[]>(`${this.api}/${this.data}`).subscribe(
      (response: any)=>{
        this.trendproducts=response;
        this.trendproducts=Array.of(this.trendproducts);
        console.log(this.trendproducts);
        
      }
    )
    let postData ={
      "product_name":this.trendproducts[0].name,
      "price":this.trendproducts[0].price
    }
    console.log(this.trendproducts[0].name);
    this.http.post("http://localhost:8080/api/v1/register/cart",postData).subscribe(
      (response)=>console.log(response)
    );
    
}
  SubmitForm(){
    console.log(this.reviewForm.value);
  }
}
