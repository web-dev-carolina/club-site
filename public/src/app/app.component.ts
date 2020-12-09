import { Component } from '@angular/core';
import { ProjectService } from './services/projects.service';
import { AnnouncementService } from './services/announcements.service';
import { UpcomingEventsService } from './services/upcomingEvents.service';
import { TestimonialService } from './services/testimonials.service';
import { MemberFormService } from './services/memberForm.service';
import { ClientFormService } from './services/clientForm.service';
import { GeneralFormService } from './services/generalForm.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectService,
  AnnouncementService,
  UpcomingEventsService,
  TestimonialService,
  MemberFormService,
  ClientFormService,
  GeneralFormService,
  LoginService]
})
export class AppComponent {
  title = 'my-app';
}
