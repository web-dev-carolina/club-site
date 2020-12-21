import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LogoutService {
  constructor(private http: HttpClient) {
      console.log('Logout service working');
  }

  logout(): any {
    return this.http.get('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/logout');
  }
}
