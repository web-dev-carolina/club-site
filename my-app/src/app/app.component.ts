import { Component } from '@angular/core';

@Component({
 // app.component.ts
template: `
  <!-- header -->
  <app-header></app-header>

  <!-- testing the home page -->
  <app-home></app-home>

  <!-- routes will be rendered here -->
  <router-outlet></router-outlet>

  <!-- footer -->
  <app-footer></app-footer>
`,
})
export class AppComponent {
  title = 'my-app';
}
