import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BannersComponent } from './banners/banners.component';
import { BaseComponent } from './base/base.component';
import { TestrouteComponent } from './testroute/testroute.component';


const routes: Routes = [
  { path: '', redirectTo: '/bannerHome', pathMatch: 'full' },
  { path: 'bannerHome', component: BannersComponent },
  {path:'login',component:LoginComponent,pathMatch: 'full'},
  {path:'signup',component:SignupComponent,pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
