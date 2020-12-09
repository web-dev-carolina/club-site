import { Component } from '@angular/core';
import { UpcomingEventsService } from '../../../../services/upcomingEvents.service';
import { UpcomingEvent } from '../../../../../UpcomingEvent';

@Component({
    selector: 'app-create',
    templateUrl: 'create.component.html',
    styleUrls: ['create.component.css']
})
export class CreateComponent {
    upcomingEvents: UpcomingEvent[];

    constructor(private upcomingEventService: UpcomingEventsService) {
      this.upcomingEventService.getUpcomingEvents().subscribe((upcomingEvents: any[]) => {
        this.upcomingEvents = upcomingEvents;
      });
    }
}
