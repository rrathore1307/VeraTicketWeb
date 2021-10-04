import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LayoutModule } from '../layout/layout.module';
import { PagesComponent } from './pages.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationService } from 'primeng/api';
import { CommonService } from 'src/app/services';


@NgModule({
  declarations: [HomeComponent, ChangePasswordComponent, PagesComponent, AboutUsComponent, ContactUsComponent],
  imports: [
    LayoutModule,
    RouterModule,
    PagesRoutingModule,
    SharedModule
  ],
  providers:[ConfirmationService, CommonService]
})
export class PagesModule { }
