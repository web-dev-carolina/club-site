import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MemberFormService {
  constructor(private http: HttpClient) {
      console.log('Member Form service working');
  }

  // tslint:disable-next-line:typedef
  postForm(memberForm){
    return this.http.post('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/memberForm', memberForm).toPromise();
  }

  // tslint:disable-next-line:typedef
  getForms(){
    return this.http.get('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/memberForm');
  }

  // tslint:disable-next-line:typedef
  updateForm(id, newForm) {
    return this.http.put('http://localhost:3000/api/memberForm/' + id, newForm).toPromise();
  }
}
