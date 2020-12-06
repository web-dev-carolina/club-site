import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientFormService {
  constructor(private http: HttpClient) {
      console.log('Client Form service working');
  }

  // tslint:disable-next-line:typedef
  postForm(n, b, e, m, s){
    return this.http.post('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/clientForm',
    { name: n, business: b, email: e, message: m, service: s })
    .toPromise();
  }
}
