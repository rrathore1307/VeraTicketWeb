import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UserAboutInfoComponent } from './user-about-info/user-about-info.component';
import { UserImageGallaryComponent } from './user-image-gallary/user-image-gallary.component';


@NgModule({
  declarations: [ProfileComponent, UserAboutInfoComponent, UserImageGallaryComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
