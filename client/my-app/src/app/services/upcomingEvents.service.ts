import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable()
export class UpcomingEventsService {
  constructor(private http: HttpClient) {
      console.log('working');
  }

  // tslint:disable-next-line:typedef
  getUpcomingEvents(){
     return this.http.get('http://localhost:3000/api/upcomingEvents');
  }
}
