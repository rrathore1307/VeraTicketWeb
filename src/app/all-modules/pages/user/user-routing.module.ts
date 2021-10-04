import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserAboutInfoComponent } from './user-about-info/user-about-info.component';
import { UserImageGallaryComponent } from './user-image-gallary/user-image-gallary.component';

const routes: Routes = [
  {path:'',component:ProfileComponent},
  {path:'profile',component:ProfileComponent},
  {path:'about-us',component: UserAboutInfoComponent},
  {path:'gallery',component: UserImageGallaryComponent}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
