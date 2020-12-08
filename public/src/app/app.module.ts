import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopBarComponent } from './components/landing/top-bar/top-bar.component';
import { AnnouncementComponent } from './components/landing/upcoming-announcement/announcement/announcement.component';
import { HomeComponent } from './components/landing/home/home.component';
import { AboutUsComponent } from './components/landing/about-us/about-us.component';
import { ProjectComponent } from './components/landing/project/project.component';
import { TestimonialComponent } from './components/landing/testimonial/testimonial.component';
import { ContactUsComponent } from './components/landing/contact-us/contact-us.component';
import { UpcomingAnnouncementComponent } from './components/landing/upcoming-announcement/upcoming-announcement.component';
import { UpcomingEventComponent } from './components/landing/upcoming-announcement/upcoming-event/upcoming-event.component';
import { FooterComponent } from './components/landing/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AnnouncementComponent,
    HomeComponent,
    AboutUsComponent,
    ProjectComponent,
    TestimonialComponent,
    ContactUsComponent,
    UpcomingAnnouncementComponent,
    UpcomingEventComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([{ path: '', component: HomeComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
