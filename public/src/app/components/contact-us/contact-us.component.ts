import { Component, AfterContentInit } from '@angular/core';
import { MemberFormService } from '../../services/memberForm.service';
import { ClientFormService } from '../../services/clientForm.service';
import { GeneralFormService } from '../../services/generalForm.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: 'contact-us.component.html',
  styleUrls: ['contact-us.component.css'],
})
export class ContactUsComponent implements AfterContentInit {
  state = '';
  constructor(private memberFormService: MemberFormService,
              private clientFormService: ClientFormService,
              private generalFormService: GeneralFormService){
    this.state = 'potenital member';
    window.addEventListener('click', (e) => {
      e.preventDefault();
      const id = (event.target as HTMLElement).id;
      if (id === 'memberSubmit'){
        const firstName = (document.getElementById('inputFirstName') as HTMLInputElement).value;
        const lastName = (document.getElementById('inputLastName') as HTMLInputElement).value;
        const email = (document.getElementById('inputEmail') as HTMLInputElement).value;
        const message = (document.getElementById('inputMessage') as HTMLInputElement).value;
        if (firstName.length === 0){
          (document.getElementById('inputFirstName') as HTMLInputElement).setAttribute('class', 'form-control is-invalid');
        }
        if (lastName.length === 0) {
          (document.getElementById('inputLastName') as HTMLInputElement).setAttribute('class', 'form-control is-invalid');
        }
        if (email.length === 0) {
          (document.getElementById('inputEmail') as HTMLInputElement).setAttribute('class', 'form-control is-invalid');
        }
        if (message.length === 0) {
          (document.getElementById('inputMessage') as HTMLInputElement).setAttribute('class', 'form-control is-invalid');
        }
        if (firstName.length !== 0 || lastName.length !== 0 || email.length !== 0 || message.length !== 0) {
          const resp = this.memberFormService.postForm(firstName, lastName, email, message);
          resp.then(data => {if (data !== false){
            if (!document.getElementById('divSuccess')){
              const div = document.createElement('div');
              const del = document.createElement('button');
              const span = document.createElement('span');
              div.setAttribute('class', 'alert alert-success alert-dismissible fade show');
              div.setAttribute('id', 'divSuccess');
              div.innerHTML = 'You\'ve contacted us. We\'ll get back to you as soon as possible';
              del.setAttribute('type', 'button');
              del.setAttribute('class', 'close');
              del.setAttribute('data-dismiss', 'alert');
              del.setAttribute('aria-label', 'Close');
              del.setAttribute('id', 'delNoti');
              span.setAttribute('aria-hidden', 'true');
              span.innerHTML = '&times;';
              del.appendChild(span);
              div.appendChild(del);
              document.getElementById('memberForm').appendChild(div);
            }
          }});
        }
      } else if (id === 'clientSubmit') {
        const name = (document.getElementById('inputName') as HTMLInputElement).value;
        const business = (document.getElementById('inputLastName') as HTMLInputElement).value;
        const email = (document.getElementById('inputEmail') as HTMLInputElement).value;
        const message = (document.getElementById('inputMessage') as HTMLInputElement).value;
        const service = 'CHANGE THIS! HARD CODED!';
        const resp = this.clientFormService.postForm(name, business, email, message, service);
        resp.then(data => {if (data !== false){
          if (!document.getElementById('divSuccess')){
            const div = document.createElement('div');
            const del = document.createElement('button');
            const span = document.createElement('span');
            div.setAttribute('class', 'alert alert-success alert-dismissible fade show');
            div.setAttribute('id', 'divSuccess');
            div.innerHTML = 'You\'ve contacted us. We\'ll get back to you as soon as possible';
            del.setAttribute('type', 'button');
            del.setAttribute('class', 'close');
            del.setAttribute('data-dismiss', 'alert');
            del.setAttribute('aria-label', 'Close');
            del.setAttribute('id', 'delNoti');
            span.setAttribute('aria-hidden', 'true');
            span.innerHTML = '&times;';
            del.appendChild(span);
            div.appendChild(del);
            document.getElementById('memberForm').appendChild(div);
          }
        }});
      } else if (id === 'generalSubmit') {
        const name = (document.getElementById('inputName') as HTMLInputElement).value;
        const affiliation = (document.getElementById('Affiliation') as HTMLInputElement).value;
        const email = (document.getElementById('inputEmail') as HTMLInputElement).value;
        const message = (document.getElementById('inputMessage') as HTMLInputElement).value;
        const resp = this.generalFormService.postForm(name, affiliation, email, message);
        resp.then(data => {if (data !== false){
          if (!document.getElementById('divSuccess')){
            const div = document.createElement('div');
            const del = document.createElement('button');
            const span = document.createElement('span');
            div.setAttribute('class', 'alert alert-success alert-dismissible fade show');
            div.setAttribute('id', 'divSuccess');
            div.innerHTML = 'You\'ve contacted us. We\'ll get back to you as soon as possible';
            del.setAttribute('type', 'button');
            del.setAttribute('class', 'close');
            del.setAttribute('data-dismiss', 'alert');
            del.setAttribute('aria-label', 'Close');
            del.setAttribute('id', 'delNoti');
            span.setAttribute('aria-hidden', 'true');
            span.innerHTML = '&times;';
            del.appendChild(span);
            div.appendChild(del);
            document.getElementById('memberForm').appendChild(div);
          }
        }});
      }
    });
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
