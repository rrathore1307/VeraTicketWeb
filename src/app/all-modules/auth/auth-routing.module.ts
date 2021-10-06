import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {path:'',component:AuthHomeComponent, children:[
    {path:'login',component:LoginComponent,data: { variableName: 'variableValue' },pathMatch: 'full',},
  {path:'login:id',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgot-password',component:ResetPasswordComponent},
  {path:'reset-password',component: ForgotPassComponent},
  {path:'**',component:PageNotFoundComponent,data:{'title':"Page Not Found"}}
  ]},
  {path:'**',component:PageNotFoundComponent,data:{'title':"Page Not Found"}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
