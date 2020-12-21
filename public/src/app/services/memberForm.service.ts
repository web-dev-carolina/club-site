import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MemberFormService {
  constructor(private http: HttpClient) {
      console.log('Member Form service working');
  }

  postForm(memberForm): any {
    return this.http.post('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/memberForm', memberForm).toPromise();
  }

  getForms(): any {
    return this.http.get('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/memberForm');
  }

  updateForm(id, newForm): any {
    return this.http.put('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/memberForm/' + id, newForm).toPromise();
  }
}
