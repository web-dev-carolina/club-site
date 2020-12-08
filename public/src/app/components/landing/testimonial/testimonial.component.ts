import { Component } from '@angular/core';
import { TestimonialService } from '../../../services/testimonials.service';
import { Testimonial } from '../../../../Testimonial';

@Component({
  selector: 'app-testimonial',
  templateUrl: 'testimonial.component.html',
  styleUrls: ['testimonial.component.css'],
})
export class TestimonialComponent {
  testimonials: Testimonial[];
  constructor(private testimonialService: TestimonialService){
    this.testimonialService.getTestimonials().subscribe((testimonials: any[]) => {
      this.testimonials = testimonials;
    });
  }
}
