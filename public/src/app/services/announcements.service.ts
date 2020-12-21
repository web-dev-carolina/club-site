import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AnnouncementService {
  constructor(private http: HttpClient) {
      console.log('Announcement service working');
  }

  getAnnouncements(): any{
     return this.http.get('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/announcements');
  }

  newAnnouncement(announcement): any {
    return this.http.post('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/announcements', announcement)
    .toPromise();
  }

  deleteAnnouncement(id): any {
    return this.http.delete('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/announcements/' + id)
    .toPromise();
  }

  updateAnnouncement(id, newAnnouncement): any {
    return this.http.put('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/announcements/' + id, newAnnouncement).toPromise();
  }
}
