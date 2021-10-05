import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserAboutInfoComponent } from './user-about-info/user-about-info.component';
import { UserImageGallaryComponent } from './user-image-gallary/user-image-gallary.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { MyTicketComponent } from './my-ticket/my-ticket.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';

const routes: Routes = [
  {
    path: '', component: UserHomeComponent, children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'about-us', component: UserAboutInfoComponent },
      { path: 'gallery', component: UserImageGallaryComponent },
      { path: 'my-ticket', component: MyTicketComponent },
      { path: 'my-wallet', component: MyWalletComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
