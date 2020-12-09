import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/landing/login/login.component';
import { SinglePComponent } from './components/landing/single-page/single-p.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { CreateComponent } from './components/logged-in/create/create.component';
import { HomeLoggedComponent } from './components/logged-in/home-logged/home-logged.component';

const routes: Routes = [
  {path: '**', redirectTo: 'landing'},
  {path: '', component: LandingComponent, children: [{path: '', component: SinglePComponent},
    {path: 'signIn', component: LoginComponent}]},
  {path: 'loggedIn', component: LoggedInComponent, children: [{path: '', component: HomeLoggedComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
