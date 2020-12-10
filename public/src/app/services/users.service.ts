import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {
      console.log('Users service working');
  }

  // tslint:disable-next-line:typedef
  getUsers(){
     return this.http.get('http://localhost:3000/api/users');
  }
}
