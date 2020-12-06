import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UpcomingEventsService {
  constructor(private http: HttpClient) {
      console.log('Upcoming events service working');
  }

  // tslint:disable-next-line:typedef
  getUpcomingEvents(){
     return this.http.get('https://webdevcarolina.com/api/upcomingEvents');
  }
}
