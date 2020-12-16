import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AnnouncementService {
  constructor(private http: HttpClient) {
      console.log('Announcement service working');
  }

  // tslint:disable-next-line:typedef
  getAnnouncements(){
     return this.http.get('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/announcements');
  }

  // tslint:disable-next-line:typedef
  newAnnouncement(announcement){
    return this.http.post('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/announcements', announcement)
    .toPromise();
  }

  // tslint:disable-next-line:typedef
  deleteAnnouncement(id) {
    return this.http.delete('http://localhost:3000/api/announcements/' + id)
    .toPromise();
  }
}
