import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopBarComponent } from './top-bar/top-bar.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectComponent } from './project/project.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AnnouncementComponent,
    HomeComponent,
    AboutUsComponent,
    ProjectComponent,
    TestimonialComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
