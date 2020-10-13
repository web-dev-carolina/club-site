import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-top-bar></app-top-bar>
    <app-home></app-home>
    <app-about-us></app-about-us>
    <app-testimonial></app-testimonial>
    <app-project></app-project>
    <app-contact-us></app-contact-us>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
}
