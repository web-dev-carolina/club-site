// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { SinglePComponent } from './single-p.component';
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
        SinglePComponent,
        HomeComponent,
        AboutUsComponent,
        TestimonialComponent,
        UpcomingAnnouncementComponent,
        ProjectComponent,
        ContactUsComponent,
        FooterComponent
    ],
    exports: [
        SinglePComponent,
    ]
})

export class SinglePModule {
}
