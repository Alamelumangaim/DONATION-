import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { NgFor } from '@angular/common';
import { response } from 'express';
@Component({
  selector: 'app-philanthroshopping',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,MatIconModule,MatMenuModule,MatButtonModule,NgFor],
  providers:[ProductsService],
  templateUrl: './philanthroshopping.component.html',
  styleUrl: './philanthroshopping.component.css'
})
export class PhilanthroshoppingComponent {
  products: Product[] = [];
  bestproducts: Product[] = [];
  fashionproducts: Product[] = [];
  constructor(private productService: ProductsService){}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((products)=>this.products=products);
    this.productService.getBestProducts().subscribe((bestproducts)=>this.bestproducts=bestproducts);
     this.productService.getFashionProducts().subscribe((fashionproducts)=>this.fashionproducts=fashionproducts);
     
}
getTrend(products: Product){
    this.productService.getTrend(products).subscribe((response)=>console.log(response));
}
}
