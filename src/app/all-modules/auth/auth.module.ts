import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPassComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    AuthRoutingModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule
  ]
})
export class AuthModule { }
