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
  newTestimonial(testimonial){
    return this.http.post('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/testimonials', testimonial)
    .toPromise();
  }

  // tslint:disable-next-line:typedef
  deleteTestimonial(id) {
    return this.http.delete('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/testimonials/' + id)
    .toPromise();
  }

  // tslint:disable-next-line:typedef
  updateTestimonial(id, newTestimonial) {
    return this.http.put('http://localhost:3000/api/testimonials/' + id, newTestimonial).toPromise();
  }
}
