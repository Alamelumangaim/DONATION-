import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
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
    }
];
