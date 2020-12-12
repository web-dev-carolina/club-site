import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';

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
  newUpcomingEvent(event) {
    return this.http.post('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/upcomingEvents',
    event).toPromise();
  }

  // tslint:disable-next-line:typedef
  deleteEvent(id) {
    return this.http.delete('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/upcomingEvents/' + id)
    .toPromise();
  }

  // tslint:disable-next-line:typedef
  updateEvent(curr) {
    return this.http.put('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/upcomingEvents/' + curr.title,
    curr).toPromise();
  }
}
