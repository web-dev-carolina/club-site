import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AnnouncementService {
  constructor(private http: HttpClient) {
      console.log('hi');
  }

  // tslint:disable-next-line:typedef
  getAnnouncements(){
     return this.http.get('http://localhost:3000/api/announcements');
  }
}
