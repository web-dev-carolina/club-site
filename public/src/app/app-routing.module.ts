import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/landing/login/login.component';
import { SinglePComponent } from './components/landing/single-page/single-p.component';

const routes: Routes = [
  {path: '**', redirectTo: 'landing'},
  {path: 'landing', component: LandingComponent, children: [{path: '', component: SinglePComponent}, 
    {path: 'login', component: LoginComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
