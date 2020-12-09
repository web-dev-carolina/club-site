import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {
      console.log('Login service working');
  }

  // tslint:disable-next-line:typedef
  login(u, p){
    return this.http.post('http://localhost:3000/api/login',
    {user: u, password: p}).toPromise().catch(err => {
      return false;
    });
  }
}
