import { Component, OnInit } from '@angular/core';
import { UpcomingEventsService } from '../../../services/upcomingEvents.service';
import { UpcomingEvent } from '../../../../UpcomingEvent';

@Component({
  selector: 'app-upcoming-event',
  templateUrl: './upcoming-event.component.html',
  styleUrls: ['./upcoming-event.component.css']
})
export class UpcomingEventComponent implements OnInit {
  upcomingEvents: UpcomingEvent[];

  constructor(private upcomingEventService: UpcomingEventsService) {
    this.upcomingEventService.getUpcomingEvents().subscribe((upcomingEvents: any[]) => {
      this.upcomingEvents = upcomingEvents;
    });
  }

  ngOnInit(): void {
  }

}
