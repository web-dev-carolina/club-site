import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UpcomingEventsService {
  constructor(private http: HttpClient) {
      console.log('Upcoming events service working');
  }

  // tslint:disable-next-line:typedef
  getUpcomingEvents(){
     return this.http.get('https://cors-anywhere.herokuapp.com/https://us-central1-home-c6ab1.cloudfunctions.net/api/upcomingEvents');
  }
}
