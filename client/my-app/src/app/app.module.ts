import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopBarComponent } from './components/top-bar/top-bar.component';
import { AnnouncementComponent } from './components/upcoming-announcement/announcement/announcement.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProjectComponent } from './components/project/project.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { UpcomingAnnouncementComponent } from './components/upcoming-announcement/upcoming-announcement.component';
import { UpcomingEventComponent } from './components/upcoming-announcement/upcoming-event/upcoming-event.component';
import { FooterComponent } from './components/footer/footer.component';

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
