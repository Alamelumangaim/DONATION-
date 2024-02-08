import { Component, OnInit } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Cart } from '../../interfaces/cart';
import { ProductsService } from '../../services/products.service';
import { NgFor } from '@angular/common';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,MatPaginatorModule,MatTableModule,NgFor,TableModule],
  providers:[ProductsService],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartProducts: Cart[] = [];
  public total=0;
  private value: any;
  constructor(private productService: ProductsService){}
  ngOnInit(): void {
      this.productService.getCart().subscribe(
        (cartProducts)=>{this.cartProducts=cartProducts;
        this.findSum(this.cartProducts)
        }
      )
  }
  deleteCart(cart: Cart){
    this.productService.deleteCart(cart).subscribe(
      ()=>this.cartProducts=this.cartProducts.filter(c=>c.id!==cart.id)
    );
  }
  findSum(data: Cart[]){
    debugger
    this.value=data;
    console.log(this.value);
    for(let j=0;j<data.length;j++){   
      this.total+= this.value[j].price;  
      console.log(this.total)  
 }  
  }
}
