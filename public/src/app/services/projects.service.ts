import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectService {
  constructor(private http: HttpClient) {
      console.log('Project service working');
  }

  // tslint:disable-next-line:typedef
  getProjects(){
     return this.http.get('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/projects');
  }
}
