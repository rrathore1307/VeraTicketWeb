import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPassComponent, ResetPasswordComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
