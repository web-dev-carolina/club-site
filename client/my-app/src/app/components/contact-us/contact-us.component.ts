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
        document.getElementById('memberImg').setAttribute('src', 'assets/images/members.png');
        document.getElementById('clientImg').setAttribute('src', 'assets/images/Client.png');
        document.getElementById('generalImg').setAttribute('src', 'assets/images/questions.png');
      };
      document.getElementById('potentialClientLink').onclick = () => {
        this.state = 'potential client';
        document.getElementById('clientImg').setAttribute('src', 'assets/images/ClickedClient.png');
        document.getElementById('memberImg').setAttribute('src', 'assets/images/UnclickedMember.png');
        document.getElementById('generalImg').setAttribute('src', 'assets/images/questions.png');
      };
      document.getElementById('generalLink').onclick = () => {
        this.state = 'general';
        document.getElementById('generalImg').setAttribute('src', 'assets/images/ClickedGeneral.png');
        document.getElementById('memberImg').setAttribute('src', 'assets/images/UnclickedMember.png');
        document.getElementById('clientImg').setAttribute('src', 'assets/images/Client.png');
      };
    };
  }
}
