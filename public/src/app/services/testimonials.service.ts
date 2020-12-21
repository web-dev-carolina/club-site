import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestimonialService {
  constructor(private http: HttpClient) {
      console.log('Testimonial service working');
  }

  getTestimonials(): any {
     return this.http.get('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/testimonials');
  }

  newTestimonial(testimonial): any {
    return this.http.post('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/testimonials', testimonial)
    .toPromise();
  }

  deleteTestimonial(id): any {
    return this.http.delete('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/testimonials/' + id)
    .toPromise();
  }

  updateTestimonial(id, newTestimonial): any {
    return this.http.put('https://us-central1-home-c6ab1.cloudfunctions.net/app/api/testimonials/' + id, newTestimonial).toPromise();
  }
}
