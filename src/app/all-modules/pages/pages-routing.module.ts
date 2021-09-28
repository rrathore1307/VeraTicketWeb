import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {path:'',component:PagesComponent,children:[
    {path:'',component:HomeComponent, data:{'title':'Home Page'}},
    {path:'home',component:HomeComponent, data:{'title':'Home Page'}},
    {path:'about-us',component:AboutUsComponent, data:{'title':'About Page'}},
    {path:'contact-us',component:ContactUsComponent, data:{'title':'Contact Us'}},
    {path:'user',loadChildren:()=>import("./user/user.module").then((m)=>m.UserModule),data:{'title':'User Detail'}}
  ],canActivateChild:[AuthGuard],data:{'title':'User Detail'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
