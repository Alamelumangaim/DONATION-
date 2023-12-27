import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requests } from '../request';
import { DonorDetails } from '../donorform';
import { Donator } from '../Donator';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 /*  api_url = "http://localhost:8080/api/v1/register/adduser";
  constructor(private http: HttpClient) { }
  registerUser(user : User): Observable<User>{
    return this.http.post<User>(`${this.api_url}`,user);
  } */
  private api_url="http://localhost:8080/api/v1/register";
  constructor(private http: HttpClient){}
  getRequests(): Observable<Requests[]>{
    return this.http.get<Requests[]>(`${this.api_url}/getrequests`);
  }
  getDonors(): Observable<DonorDetails[]>{
    return this.http.get<DonorDetails[]>(`${this.api_url}/donorform`);
  }
 
}
