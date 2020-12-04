import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MemberFormService {
  constructor(private http: HttpClient) {
      console.log('Member Form service working');
  }

  // tslint:disable-next-line:typedef
  postForm(f, l, e, m){
    return this.http.post('http://localhost:3000/api/memberForm', { firstName: f, lastName: l, email: e, message: m }).toPromise();
  }
}
