import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UpcomingEventsService {
  constructor(private http: HttpClient) {
      console.log('Upcoming events service working');
  }

  // tslint:disable-next-line:typedef
  getUpcomingEvents() {
     return this.http.get('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/upcomingEvents');
  }

  // tslint:disable-next-line:typedef
  newUpcomingEvent(t, b, d, m) {
    return this.http.post('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/upcomingEvents',
    { title: t, body: b, day: d, month: m}).toPromise();
  }

  // tslint:disable-next-line:typedef
  deleteEvent(t) {
    return this.http.delete('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/upcomingEvents/' + t)
    .toPromise();
  }

  // tslint:disable-next-line:typedef
  updateEvent(title, body, day, month) {
    return this.http.put('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/upcomingEvents/' + title,
    { title, body, day, month}).toPromise();
  }
}
