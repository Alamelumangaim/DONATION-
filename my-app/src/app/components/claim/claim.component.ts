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
@Component({
  selector: 'app-claim',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,NgFor],
  templateUrl: './claim.component.html',
  styleUrl: './claim.component.css',
  providers:[DonatorsService]
})
export class ClaimComponent {
  donations: any = []

  @Output() claim: EventEmitter<Donator> = new EventEmitter();
  private donor: Donator[]=[];
  private routeSub: Subscription | undefined;
  data: any;
 private api="http://localhost:8080/api/v1/register/getdonationsbyid"
  constructor(private donatorService: DonatorsService,private http: HttpClient,private route: ActivatedRoute){}
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.data= params['id'];
      
    });
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


}