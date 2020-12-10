import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestimonialService {
  constructor(private http: HttpClient) {
      console.log('Testimonial service working');
  }

  // tslint:disable-next-line:typedef
  getTestimonials(){
     return this.http.get('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/testimonials');
  }

  // tslint:disable-next-line:typedef
  newTestimonial(t, b){
    return this.http.post('http://localhost:3000/api/testimonials',
    { title: t, body: b})
    .toPromise();
  }
}
