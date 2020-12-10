import { Component } from '@angular/core';
import { LogoutService } from '../../../../services/logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar-logged-in',
  templateUrl: 'top-bar-logged-in.component.html',
  styleUrls: ['top-bar-logged-in.component.css'],
})
export class TopBarLoggedInComponent {
  constructor(private logoutService: LogoutService, private router: Router) {
    window.addEventListener('click', (e) => {
      const element = (e.target as HTMLElement);
      if (element.id === 'largeContact'){
        this.logoutService.logout();
        this.router.navigateByUrl('/');
      }
    });
  }
}
