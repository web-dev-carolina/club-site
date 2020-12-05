import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestimonialService {
  constructor(private http: HttpClient) {
      console.log('Testimonial service working');
  }

  // tslint:disable-next-line:typedef
  getTestimonials(){
     return this.http.get('http://localhost:3000/api/testimonials');
  }
}
