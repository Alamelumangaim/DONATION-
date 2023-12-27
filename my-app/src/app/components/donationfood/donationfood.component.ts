import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
import { Requests } from '../../request';
import { AuthService } from '../../services/auth.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-donationfood',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,NgFor],
  templateUrl: './donationfood.component.html',
  styleUrl: './donationfood.component.css',
  providers:[AuthService]
})
export class DonationfoodComponent {
  requests: Requests[]=[];
  constructor(private authservice: AuthService){}
  ngOnInit(): void {
    this.authservice.getRequests().subscribe((requests)=>this.requests=requests)
}

}
