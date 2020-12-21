import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientFormService {
  constructor(private http: HttpClient) {
      console.log('Client Form service working');
  }

  postForm(clientForm): any{
    return this.http.post('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/clientForm', clientForm)
    .toPromise();
  }

  getForms(): any {
    return this.http.get('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/clientForm');
  }

  updateForm(id, newForm): any {
    return this.http.put('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/clientForm/' + id, newForm).toPromise();
  }
}
