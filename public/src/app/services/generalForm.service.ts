import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GeneralFormService {
  constructor(private http: HttpClient) {
      console.log('General Form service working');
  }

  postForm(generalForm): any {
    return this.http.post('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/generalForm', generalForm)
    .toPromise();
  }

  getForms(): any{
    return this.http.get('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/generalForm');
  }

  updateForm(id, newForm): any {
    return this.http.put('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/generalForm/' + id, newForm).toPromise();
  }
}
