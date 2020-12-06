import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestimonialService {
  constructor(private http: HttpClient) {
      console.log('Testimonial service working');
  }

  // tslint:disable-next-line:typedef
  getTestimonials(){
     return this.http.get('https://webdevcarolina.com/api/testimonials');
  }
}
