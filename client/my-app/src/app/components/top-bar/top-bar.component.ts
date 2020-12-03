import { Component } from '@angular/core';

window.onscroll = () => {
  const currentScrollPos = window.pageYOffset;

  // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
  if (currentScrollPos > 800) {
    // I am using 'display' instead of 'top':
    document.getElementById('white-nav').style.display = 'initial';
  } else {
    document.getElementById('white-nav').style.display = 'none';
  }
};

@Component({
  selector: 'app-top-bar',
  templateUrl: 'top-bar.component.html',
  styleUrls: ['top-bar.component.css'],
})
export class TopBarComponent {
}
