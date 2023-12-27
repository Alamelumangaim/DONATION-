import { Injectable } from '@angular/core';
import { Donator } from '../Donator';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DonatorsService {
 public data: any
  constructor(private http: HttpClient) {
    console.log(this.data);
   }
  private url = "http://localhost:8080/api/v1/register"
  getdonators(): Observable<Donator[]>{
    return this.http.get<Donator[]>(`${this.url}/getdonations`);
  }
  getdonatorsbyid(donator: Donator): Observable<Donator>{
    return this.http.get<Donator>(`${this.url}/getdonationsbyid/${donator.id}`)
  }
  
  
}
