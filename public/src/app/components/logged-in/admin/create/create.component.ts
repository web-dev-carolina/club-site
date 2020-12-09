import { Component } from '@angular/core';
import { UpcomingEventsService } from '../../../../services/upcomingEvents.service';
import { UpcomingEvent } from '../../../../../UpcomingEvent';
import { AnnouncementService } from '../../../../services/announcements.service';
import { Announcement } from '../../../../../Announcement';

@Component({
    selector: 'app-create',
    templateUrl: 'create.component.html',
    styleUrls: ['create.component.css']
})
export class CreateComponent {
    upcomingEvents: UpcomingEvent[];
    announcements: Announcement[];

    constructor(private upcomingEventService: UpcomingEventsService, private annoucementService: AnnouncementService) {
      this.upcomingEventService.getUpcomingEvents().subscribe((upcomingEvents: any[]) => {
        this.upcomingEvents = upcomingEvents;
      });
      this.annoucementService.getAnnouncements().subscribe((announcements: any[]) => {
        this.announcements = announcements;
      });
    }
}
