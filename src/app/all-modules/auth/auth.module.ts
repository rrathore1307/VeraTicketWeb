import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthHomeComponent } from './auth-home/auth-home.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPassComponent, ResetPasswordComponent, AuthHomeComponent],
  imports: [
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
