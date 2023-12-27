import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-postdonation',
  standalone: true,
  imports: [ RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './postdonation.component.html',
  styleUrl: './postdonation.component.css'
})
export class PostdonationComponent {

}
