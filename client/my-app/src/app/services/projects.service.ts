import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectService {
  constructor(private http: HttpClient) {
      console.log('working');
  }

  // tslint:disable-next-line:typedef
  getProjects(){
     return this.http.get('http://localhost:3000/api/projects');
  }
}
