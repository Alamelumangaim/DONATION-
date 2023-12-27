import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { DonationfoodComponent } from '../donationfood/donationfood.component';
import { Requests } from '../../request';
import { AuthService } from '../../services/auth.service';
import { NgFor } from '@angular/common';
import { DonorDetails } from '../../donorform';
import { Donator } from '../../Donator';
import { DonatorsService } from '../../services/donators.service';
import { response } from 'express';
import { Carousel, CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-fooddonate',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,DonationfoodComponent,NgFor,CarouselModule],
  templateUrl: './fooddonate.component.html',
  styleUrl: './fooddonate.component.css',
  providers:[AuthService,DonatorsService]
})
export class FooddonateComponent {
  
  requests: Requests[]=[];
  donors: DonorDetails[]=[];
  donators: Donator[] = [];
  constructor(private authService: AuthService,private donatorService: DonatorsService){}
  ngOnInit(): void {
    this.authService.getRequests().subscribe((requests)=>this.requests=requests);
    this.donatorService.getdonators().subscribe(
      (donators)=>this.donators=donators);
     
     
}
  ClaimDonation(donators: Donator){
    this.donatorService.getdonatorsbyid(donators).subscribe(
      (donators)=>console.log(donators)
    );
  }
  claimDetails(donators: Donator){
    this.donatorService.getdonatorsbyid(donators).subscribe(
      (donators)=>console.log(donators)
    )
  }
  
}
