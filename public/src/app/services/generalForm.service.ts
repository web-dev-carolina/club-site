import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GeneralFormService {
  constructor(private http: HttpClient) {
      console.log('General Form service working');
  }

  // tslint:disable-next-line:typedef
  postForm(n, a, e, m){
    return this.http.post('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/generalForm',
    { name: n, affiliation: a, email: e, message: m })
    .toPromise();
  }
}
