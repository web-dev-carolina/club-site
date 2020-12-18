import { Component , OnInit } from '@angular/core';
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
export class CreateComponent implements OnInit {
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
    window.addEventListener('click', async (e) => {
      const element = (e.target as HTMLElement);
      const clas = element.getAttribute('class');
      const id = element.id;
      if (clas === null || clas === undefined){
        return;
      }
      if (id === 'createButton') {
        if (this.display === 'upcomingEvent') {
          const title = (document.getElementById('titleInputUpcomingEvent') as HTMLInputElement).value;
          const body = (document.getElementById('bodyInputUpcomingEvent') as HTMLInputElement).value;
          const day = (document.getElementById('dayInputUpcomingEvent') as HTMLInputElement).value;
          const month = (document.getElementById('monthInputUpcomingEvent') as HTMLInputElement).value;
          const newEvent = new UpcomingEvent(title, body, day, month);
          const respEvent = await this.upcomingEventService.newUpcomingEvent(newEvent);
          newEvent.setId(JSON.parse(JSON.stringify(respEvent)).insertedIds[0]);
          this.upcomingEvents.push(newEvent);
          this.addSuccessDiv();
        } else if (this.display === 'announcement') {
          const title = (document.getElementById('titleInputAnnouncement') as HTMLInputElement).value;
          const date = (document.getElementById('dateInputAnnouncement') as HTMLInputElement).value;
          const body = (document.getElementById('bodyInputAnnouncement') as HTMLInputElement).value;
          const newAnnouncement = new Announcement(title, date, body);
          const respAnnouncement = await this.annoucementService.newAnnouncement(newAnnouncement);
          newAnnouncement.setId(JSON.parse(JSON.stringify(respAnnouncement)).insertedIds[0]);
          this.announcements.push(newAnnouncement);
          this.addSuccessDiv();
        } else if (this.display === 'testimonial') {
          const author = (document.getElementById('authorInputTestimonial') as HTMLInputElement).value;
          const body = (document.getElementById('bodyInputTestimonial') as HTMLInputElement).value;
          const newTestimonial = new Testimonial(author, body);
          const respTestimonial = await this.testimonialService.newTestimonial(newTestimonial);
          newTestimonial.setId(JSON.parse(JSON.stringify(respTestimonial)).insertedIds[0]);
          this.testimonials.push(newTestimonial);
          this.addSuccessDiv();
        }
      } else if (clas.includes('delete')) {
        if (clas.includes('delete-event')) {
          const curr = this.upcomingEvents.filter((i) => i._id === element.title)[0];
          this.upcomingEventService.deleteEvent(curr._id);
          this.upcomingEvents = this.upcomingEvents.filter(event => { if (event._id !== curr._id) { return event; } });
        } else if (clas.includes('delete-announcement')){
          const curr = this.announcements.filter((i) => i._id === element.title)[0];
          this.annoucementService.deleteAnnouncement(curr._id);
          this.announcements = this.announcements.filter(announcement => { if (announcement._id !== curr._id) { return announcement; } });
        } else if (clas.includes('delete-testimonial')){
          const curr = this.testimonials.filter((i) => i._id === element.title)[0];
          this.testimonialService.deleteTestimonial(curr._id);
          this.testimonials = this.testimonials.filter(testimonial => { if (testimonial._id !== curr._id) { return testimonial; } });
        }
      } else if (clas.includes('save')) {
        if (clas.includes('save-event')) {
          const title = (document.getElementById('titleInputEditEvent' + element.title) as HTMLInputElement).value;
          const body = (document.getElementById('bodyInputEditEvent' + element.title) as HTMLInputElement).value;
          const day = (document.getElementById('dayInputEditEvent' +  element.title) as HTMLInputElement).value;
          const month = (document.getElementById('monthInputEditEvent' + element.title) as HTMLInputElement).value;
          const newEvent = new UpcomingEvent(title, body, day, month);
          this.upcomingEventService.updateEvent(element.title, newEvent);
          const newEvents = this.upcomingEvents.filter((i) => i._id !== element.title);
          newEvent.setId(element.title);
          newEvents.push(newEvent);
          this.upcomingEvents = newEvents;
        } else if (clas.includes('save-announcement')) {
          const title = (document.getElementById('titleInputEditAnnouncement' + element.title) as HTMLInputElement).value;
          const body = (document.getElementById('bodyInputEditAnnouncement' + element.title) as HTMLInputElement).value;
          const date = (document.getElementById('dateInputEditAnnouncement' +  element.title) as HTMLInputElement).value;
          const newAnnouncement = new Announcement(title, body, date);
          this.annoucementService.updateAnnouncement(element.title, newAnnouncement);
          const newAnnouncements = this.announcements.filter((i) => i._id !== element.title);
          newAnnouncement.setId(element.title);
          newAnnouncements.push(newAnnouncement);
          this.announcements = newAnnouncements;
        } else if (clas.includes('save-testimonial')) {
          const author = (document.getElementById('authorInputEditTestimonial' + element.title) as HTMLInputElement).value;
          const body = (document.getElementById('bodyInputEditTestimonial' + element.title) as HTMLInputElement).value;
          const newTestimonial = new Testimonial(author, body);
          this.testimonialService.updateTestimonial(element.title, newTestimonial);
          const newTestimonials = this.testimonials.filter((i) => i._id !== element.title);
          newTestimonial.setId(element.title);
          newTestimonials.push(newTestimonial);
          this.testimonials = newTestimonials;
        }
      }
    });
  }
  ngOnInit(): void {
    window.addEventListener('click', async (e) => {
      const element = (e.target as HTMLElement);
      const clas = element.getAttribute('class');
      const id = element.id;
      if (clas === null || clas === undefined){
        return;
      }
      if (clas.includes('createToggle')) {
        if (id === 'upcomingEvent') {
          this.display = 'upcomingEvent';
        } else if (id === 'announcement') {
          this.display = 'announcement';
        } else if (id === 'testimonial') {
          this.display = 'testimonial';
        }
      }
    });
  }

  addSuccessDiv(): void {
    if (!document.getElementById('divSuccess')) {
      const div = document.createElement('div');
      const del = document.createElement('button');
      const span = document.createElement('span');
      div.setAttribute('class', 'alert alert-success alert-dismissible fade show');
      div.setAttribute('id', 'divSuccess');
      div.innerHTML = 'Success!';
      del.setAttribute('type', 'button');
      del.setAttribute('class', 'close');
      del.setAttribute('data-dismiss', 'alert');
      del.setAttribute('aria-label', 'Close');
      del.setAttribute('id', 'delNoti');
      span.setAttribute('aria-hidden', 'true');
      span.innerHTML = '&times;';
      del.appendChild(span);
      div.appendChild(del);
      document.getElementById('createForm').appendChild(div);
    }
  }
}
