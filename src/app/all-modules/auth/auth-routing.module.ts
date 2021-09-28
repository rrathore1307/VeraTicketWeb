import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent,data: { variableName: 'variableValue' },pathMatch: 'full',},
  {path:'login:id',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgot-password',component:ForgotPassComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
