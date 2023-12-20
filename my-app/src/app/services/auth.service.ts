import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 /*  api_url = "http://localhost:8080/api/v1/register/adduser";
  constructor(private http: HttpClient) { }
  registerUser(user : User): Observable<User>{
    return this.http.post<User>(`${this.api_url}`,user);
  } */
}
