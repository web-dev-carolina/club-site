import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
<<<<<<< HEAD
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
  styleUrls: ['./app.component.css']
=======
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
>>>>>>> 6410131b0987c59171e9b2566db0d020324d5e83
})
export class AppComponent {
  title = 'my-app';
}
