// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { LandingComponent } from './landing.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './single-page/home/home.component';
import { AboutUsComponent } from './single-page/about-us/about-us.component';
import { TestimonialComponent } from './single-page/testimonial/testimonial.component';
import { UpcomingAnnouncementComponent } from './single-page/upcoming-announcement/upcoming-announcement.component';
import { ProjectComponent } from './single-page/project/project.component';
import { ContactUsComponent } from './single-page/contact-us/contact-us.component';
import { FooterComponent } from './single-page/footer/footer.component';

@NgModule({
    imports: [

    ],
    declarations: [
        LandingComponent,
        TopBarComponent,
        HomeComponent,
        AboutUsComponent,
        TestimonialComponent,
        UpcomingAnnouncementComponent,
        ProjectComponent,
        ContactUsComponent,
        FooterComponent
    ],
    exports: [
        LandingComponent,
    ]
})
export class LandingModule {

}
