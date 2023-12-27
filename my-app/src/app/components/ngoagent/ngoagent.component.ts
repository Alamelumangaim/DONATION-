import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { ImageService } from '../../image.service';
import { response } from 'express';
import {ThemePalette} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
@Component({
  selector: 'app-ngoagent',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,InputTextModule,ReactiveFormsModule,NgIf,MatSlideToggleModule,
    MatSliderModule,MatDatepickerModule,MatFormFieldModule,MatInputModule,MatNativeDateModule,MatCheckboxModule,MatRadioModule],
  templateUrl: './ngoagent.component.html',
  styleUrl: './ngoagent.component.css'
})
export class NgoagentComponent implements OnInit{
  NgoForm = this.fb.group({
    pickuplocation:['',Validators.required],
    deliverylocation:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    expirydate:['',Validators.required],
    fooditem:['',Validators.required],
    quantity:['',Validators.required],
    role:['',Validators.required]
  }
  )
  constructor(private fb: FormBuilder){}
  SubmitForm(){
    console.log(this.NgoForm.value);
  }
   /* MockBrowser = require('mock-browser').mocks.MockBrowser;
   mock = new this.MockBrowser();


global: any['navigator'] = this.mock.getNavigator();
  private L: any; */
  ngOnInit(): void {
      /* if(!navigator.geolocation){
        console.log("Location not supported");
      }
      navigator.geolocation.getCurrentPosition((position)=>{
      console.log(`lat:${position.coords.latitude},lon:${position.coords.longitude}`);
      let map = this.L.map('map').setView([position.coords.latitude,position.coords.longitude], 13);
      this.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWxhbWVsdTAwNSIsImEiOiJjbHFuOWRlN2kxanF4Mml0ZGUzbDE4eHllIn0.tYnKUaLIP5d0V2569YKAxA', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
      }
      
      );
      
      
  }
  WatchPosition(){
    navigator.geolocation.watchPosition((position)=>{
      console.log(`lat:${position.coords.latitude},lon:${position.coords.longitude}`)
    },
    (error)=>{
      console.log(error);
    },
    {
      enableHighAccuracy:true,
      timeout:5000,
      maximumAge:0
    }
    ) */
  }
}
