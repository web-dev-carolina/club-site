import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopBarComponent } from './components/landing/top-bar/top-bar.component';
import { SinglePComponent } from './components/landing/single-page/single-p.component';
import { AnnouncementComponent } from './components/landing/single-page/upcoming-announcement/announcement/announcement.component';
import { HomeComponent } from './components/landing/single-page/home/home.component';
import { AboutUsComponent } from './components/landing/single-page/about-us/about-us.component';
import { ProjectComponent } from './components/landing/single-page/project/project.component';
import { TestimonialComponent } from './components/landing/single-page/testimonial/testimonial.component';
import { ContactUsComponent } from './components/landing/single-page/contact-us/contact-us.component';
import { UpcomingAnnouncementComponent } from './components/landing/single-page/upcoming-announcement/upcoming-announcement.component';
import { UpcomingEventComponent } from './components/landing/single-page/upcoming-announcement/upcoming-event/upcoming-event.component';
import { FooterComponent } from './components/landing/single-page/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/landing/login/login.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { TopBarLoggedInComponent } from './components/logged-in/admin/top-bar-logged-in/top-bar-logged-in.component';
import { CreateComponent } from './components/logged-in/admin/create/create.component';
import { HomeLoggedComponent } from './components/logged-in/admin/home-logged/home-logged.component';
import { InquiriesComponent } from './components/logged-in/admin/inquiries/inquiries.component';
import { MembersComponent } from './components/logged-in/admin/members/members.component';
import { ProjectsLoggedComponent } from './components/logged-in/admin/projects-logged/projects-logged.component';
import { AdminComponent } from './components/logged-in/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TopBarComponent,
    SinglePComponent,
    AnnouncementComponent,
    HomeComponent,
    AboutUsComponent,
    ProjectComponent,
    TestimonialComponent,
    ContactUsComponent,
    UpcomingAnnouncementComponent,
    UpcomingEventComponent,
    FooterComponent,
    LoggedInComponent,
    LoginComponent,
    TopBarLoggedInComponent,
    CreateComponent,
    HomeLoggedComponent,
    InquiriesComponent,
    MembersComponent,
    ProjectsLoggedComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
