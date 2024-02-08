import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { Cart } from '../interfaces/cart';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private api_url="http://localhost:8080/api/v1/register/getTrends";
  private api_url1 = "http://localhost:8080/api/v1/register/getBest";
  private api_url2 = "http://localhost:8080/api/v1/register/getFashion";
  private api_url3="http://localhost:8080/api/v1/register/getTrend";
  private api_url4="http://localhost:8080/api/v1/register/getCart";
  private api_url5="http://localhost:8080/api/v1/register/deletecart";
  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.api_url}`);
  }
  getBestProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.api_url1}`);
  }
  getFashionProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.api_url2}`)
  }
  getTrend(products: Product): Observable<Product>{
    return this.http.get<Product>(`${this.api_url3}/${products.id}`);
  }
  getCart(): Observable<Cart[]>{
    return this.http.get<Cart[]>(`${this.api_url4}`);
  }
  deleteCart(cart: Cart): Observable<Cart>{
    return this.http.delete<Cart>(`${this.api_url5}/${cart.id}`)
  }
}
