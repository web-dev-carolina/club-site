import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UpcomingEventsService {
  constructor(private http: HttpClient) {
      console.log('Upcoming events service working');
  }

  // tslint:disable-next-line:typedef
  getUpcomingEvents(){
     return this.http.get('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/upcomingEvents');
  }

  // tslint:disable-next-line:typedef
  newUpcomingEvent(t, b, d, m){
    return this.http.post('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/upcomingEvents',
    { title: t, body: b, day: d, month: m})
    .toPromise();
  }

  // tslint:disable-next-line:typedef
  deleteEvent() {
    return this.http.post('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/upcomingEvents',
    {});
  }
}
