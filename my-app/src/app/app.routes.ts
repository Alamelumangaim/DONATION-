import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooddonateComponent } from './components/fooddonate/fooddonate.component';
import { DonationfoodComponent } from './components/donationfood/donationfood.component';
import { RequestfoodComponent } from './components/requestfood/requestfood.component';
import { PostdonationComponent } from './components/postdonation/postdonation.component';
import { DonationFormComponent } from './components/donation-form/donation-form.component';
import { DonatorinfoComponent } from './components/donatorinfo/donatorinfo.component';
import { ClaimComponent } from './components/claim/claim.component';
import { NgoagentComponent } from './components/ngoagent/ngoagent.component';
import { PhilanthroshoppingComponent } from './components/philanthroshopping/philanthroshopping.component';
import { ProductdescComponent } from './components/productdesc/productdesc.component';
import { CartComponent } from './components/cart/cart.component';
export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'blog',
        component:BlogComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
    {
        path:'food',
        component:FooddonateComponent
    },
    {
        path:'donatefood',
        component:DonationfoodComponent
    },
    {
        path:'requestfood',
        component:RequestfoodComponent
    },
    {
        path:'postdonation',
        component:PostdonationComponent
    },
    {
        path:'donationform',
        component:DonationFormComponent
    },
    {
        path:'donatorform',
        component:DonatorinfoComponent
    },
    {
        path:'claim/:id/:email',
        component:ClaimComponent
    },
    {
        path:'ngo',
        component:NgoagentComponent
    },
    {
        path:'shopping',
        component:PhilanthroshoppingComponent
    },
    {
        path:'productdetails/:id',
        component:ProductdescComponent
    },
    {
        path:'cart',
        component:CartComponent
    }
   
];
