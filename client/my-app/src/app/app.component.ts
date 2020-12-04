import { Component } from '@angular/core';
import { ProjectService } from './services/projects.service';
import { AnnouncementService } from './services/announcements.service';
import { UpcomingEventsService } from './services/upcomingEvents.service';
import { TestimonialService } from './services/testimonials.service';
import { MemberFormService } from './services/memberForm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectService,
  AnnouncementService,
  UpcomingEventsService,
  TestimonialService,
  MemberFormService]
})
export class AppComponent {
  title = 'my-app';
}
