import { Component } from '@angular/core';
import { ProjectService } from './services/projects.service';
import { AnnouncementService } from './services/announcements.service';
import { UpcomingEventsService } from './services/upcomingEvents.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectService,
  AnnouncementService,
  UpcomingEventsService]
})
export class AppComponent {
  title = 'my-app';
}
