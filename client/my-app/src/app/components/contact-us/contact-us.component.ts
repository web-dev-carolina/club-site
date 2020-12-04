import { Component, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: 'contact-us.component.html',
  styleUrls: ['contact-us.component.css'],
})
export class ContactUsComponent implements AfterContentInit {
  state = '';
  constructor(){
    this.state = 'potenital member';
  }
  ngAfterContentInit(): void{
    window.onload = () => {
      document.getElementById('potentialMemberLink').onclick = () => {
        this.state = 'potenital member';
        console.log(this.state);
      };
      document.getElementById('potentialClientLink').onclick = () => {
        this.state = 'potential client';
        console.log(this.state);
      };
      document.getElementById('generalLink').onclick = () => {
        this.state = 'general';
        console.log(this.state);
      };
    }
  }
}
