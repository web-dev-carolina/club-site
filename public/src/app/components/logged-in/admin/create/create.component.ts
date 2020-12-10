import { Component } from '@angular/core';
import { UpcomingEventsService } from '../../../../services/upcomingEvents.service';
import { UpcomingEvent } from '../../../../../UpcomingEvent';
import { AnnouncementService } from '../../../../services/announcements.service';
import { Announcement } from '../../../../../Announcement';
import { TestimonialService } from '../../../../services/testimonials.service';
import { Testimonial } from '../../../../../Testimonial';

@Component({
    selector: 'app-create',
    templateUrl: 'create.component.html',
    styleUrls: ['create.component.css']
})
export class CreateComponent {
    upcomingEvents: UpcomingEvent[];
    announcements: Announcement[];
    testimonials: Testimonial[];
    display: string;

    constructor(private upcomingEventService: UpcomingEventsService, private annoucementService: AnnouncementService,
                private testimonialService: TestimonialService) {
      this.display = 'upcomingEvent';
      this.upcomingEventService.getUpcomingEvents().subscribe((upcomingEvents: any[]) => {
        this.upcomingEvents = upcomingEvents;
      });
      this.annoucementService.getAnnouncements().subscribe((announcements: any[]) => {
        this.announcements = announcements;
      });
      this.testimonialService.getTestimonials().subscribe((testimonials: any[]) => {
        this.testimonials = testimonials;
      });
      window.addEventListener('click', (e) => {
        const element = (e.target as HTMLElement);
        const clas = element.getAttribute('class');
        const id = element.id;
        if (clas.includes('createToggle')){
          if (id === 'upcomingEvent'){
            this.display = 'upcomingEvent';
          } else if (id === 'announcement'){
            this.display = 'announcement';
          } else if (id === 'testimonial'){
            this.display = 'testimonial';
          }
        } else if (id === 'createButton'){
          if (this.display === 'upcomingEvent'){
            const title = (document.getElementById('titleInput') as HTMLInputElement).value;
            const body = (document.getElementById('bodyInput') as HTMLInputElement).value;
            const day = (document.getElementById('dayInput') as HTMLInputElement).value;
            const month = (document.getElementById('monthInput') as HTMLInputElement).value;
            this.upcomingEventService.newUpcomingEvent(title, body, day, month);
          } else if (this.display === 'announcement'){
            const title = (document.getElementById('titleInput') as HTMLInputElement).value;
            const date = (document.getElementById('dateInput') as HTMLInputElement).value;
            const body = (document.getElementById('bodyInput') as HTMLInputElement).value;
            this.annoucementService.newAnnouncement(title, date, body);
          } else if (this.display === 'testimonial'){
            console.log('hi');
          }
        }
      });
    }
}
