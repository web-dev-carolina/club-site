import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/landing/login/login.component';
import { SinglePComponent } from './components/landing/single-page/single-p.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { CreateComponent } from './components/logged-in/admin/create/create.component';
import { HomeLoggedComponent } from './components/logged-in/admin/home-logged/home-logged.component';
import { InquiriesComponent } from './components/logged-in/admin/inquiries/inquiries.component';
import { MembersComponent } from './components/logged-in/admin/members/members.component';
import { ProjectsLoggedComponent } from './components/logged-in/admin/projects-logged/projects-logged.component';
import { AdminComponent } from './components/logged-in/admin/admin.component';

const routes: Routes = [
  {path: '**', redirectTo: 'landing'},
  {path: '', component: LandingComponent, children: [{path: '', component: SinglePComponent},
    {path: 'signIn', component: LoginComponent}]},
  {path: 'loggedIn', component: LoggedInComponent, children: [{path: 'admin', component: AdminComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeLoggedComponent}, {path: 'create', component: CreateComponent},
    {path: 'inquiries', component: InquiriesComponent}, {path: 'members', component: MembersComponent},
    {path: 'projects', component: ProjectsLoggedComponent}]}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
