// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { LandingComponent } from './landing.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { UpcomingAnnouncementComponent } from './upcoming-announcement/upcoming-announcement.component';
import { ProjectComponent } from './project/project.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';

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
