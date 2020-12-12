import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientFormService {
  constructor(private http: HttpClient) {
      console.log('Client Form service working');
  }

  // tslint:disable-next-line:typedef
  postForm(clientForm){
    return this.http.post('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/clientForm', clientForm)
    .toPromise();
  }
  // tslint:disable-next-line:typedef
  getForms(){
    return this.http.get('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/clientForm');
  }
}
