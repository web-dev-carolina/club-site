import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientFormService {
  constructor(private http: HttpClient) {
      console.log('Client Form service working');
  }

  // tslint:disable-next-line:typedef
  postForm(f, b, e, m, s){
    return this.http.post('http://localhost:3000/api/clientForm', { firstName: f, business: b, email: e, message: m, service: s })
    .toPromise();
  }
}
