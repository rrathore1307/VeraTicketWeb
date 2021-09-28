import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthGuard} from './guard/auth.guard'

const routes: Routes = [
  {path:'auth',loadChildren:()=>import('./all-modules/auth/auth.module').then((m)=>m.AuthModule)},
  {path:'',loadChildren:()=>import('./all-modules/pages/pages.module').then((m)=>m.PagesModule),canActivate:[AuthGuard]},  
  // wild card router
  {path:'**',component:PageNotFoundComponent,data:{'title':"Page Not Found"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
