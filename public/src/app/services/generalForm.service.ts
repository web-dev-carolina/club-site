import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GeneralFormService {
  constructor(private http: HttpClient) {
      console.log('General Form service working');
  }

  // tslint:disable-next-line:typedef
  postForm(generalForm){
    return this.http.post('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/generalForm', generalForm)
    .toPromise();
  }
  // tslint:disable-next-line:typedef
  getForms(){
    return this.http.get('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/generalForm');
  }

  // tslint:disable-next-line:typedef
  updateForm(id, newForm) {
    return this.http.put('http://localhost:3000/api/generalForm/' + id, newForm).toPromise();
  }
}
