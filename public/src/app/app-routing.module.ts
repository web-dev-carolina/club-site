import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/landing/login/login.component';
import { SinglePComponent } from './components/landing/single-page/single-p.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';

const routes: Routes = [
  {path: '**', redirectTo: 'landing'},
  {path: 'landing', component: LandingComponent, children: [{path: '', component: SinglePComponent},
    {path: 'login', component: LoginComponent}]},
  {path: 'loggedIn', component: LoggedInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
