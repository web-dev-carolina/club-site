import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable()
export class ProjectService {
  constructor(private http: HttpClient) {
      console.log('working');
  }

  getProjects(){
     return this.http.get('http://localhost:3000/api/projects');
  }
}
