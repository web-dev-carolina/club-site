import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {
      console.log('Users service working');
  }

  // tslint:disable-next-line:typedef
  getUsers(){
     return this.http.get('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/users');
  }
}
