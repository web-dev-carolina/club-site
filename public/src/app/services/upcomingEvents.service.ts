import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';

@Injectable()
export class UpcomingEventsService {
  constructor(private http: HttpClient) {
      console.log('Upcoming events service working');
  }

  getUpcomingEvents(): any {
     return this.http.get('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/upcomingEvents');
  }

  newUpcomingEvent(event): any {
    return this.http.post('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/upcomingEvents',
    event).toPromise();
  }

  deleteEvent(id): any {
    return this.http.delete('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/upcomingEvents/' + id)
    .toPromise();
  }

  updateEvent(id, newEvent): any {
    return this.http.put('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/upcomingEvents/' + id, newEvent).toPromise();
  }
}
