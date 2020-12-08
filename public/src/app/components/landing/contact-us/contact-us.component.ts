import { Component, AfterContentInit } from '@angular/core';
import { MemberFormService } from '../../../services/memberForm.service';
import { ClientFormService } from '../../../services/clientForm.service';
import { GeneralFormService } from '../../../services/generalForm.service';

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
    this.state = 'potential member';
    window.addEventListener('click', (e) => {
      e.preventDefault();
      const id = (e.target as HTMLElement).id;
      const clas = (e.target as HTMLElement).getAttribute('class');
      if (clas.includes('serviceBtn')){
        if ((e.target as HTMLElement).getAttribute('aria-pressed') === 'true') {
          if (id === 'build'){
            (e.target as HTMLElement).setAttribute('class', 'btn mr-2 serviceBtn');
            (e.target as HTMLElement).setAttribute('aria-pressed', 'false');
          } else if (id === 'redesign'){
            (e.target as HTMLElement).setAttribute('class', 'btn serviceBtn');
            (e.target as HTMLElement).setAttribute('aria-pressed', 'false');
          } else {
            (e.target as HTMLElement).setAttribute('class', 'btn ml-2 serviceBtn');
            (e.target as HTMLElement).setAttribute('aria-pressed', 'false');
          }
        } else {
          const btns = document.getElementsByClassName('serviceBtn');
          Array.from(btns).forEach((element) => {
            if (element.id !== id){
              if (element.id === 'build'){
                element.setAttribute('class', 'btn mr-2 serviceBtn');
                element.setAttribute('aria-pressed', 'false');
              } else if (element.id === 'redesign'){
                element.setAttribute('class', 'btn serviceBtn');
                element.setAttribute('aria-pressed', 'false');
              } else {
                element.setAttribute('class', 'btn ml-2 serviceBtn');
                element.setAttribute('aria-pressed', 'false');
              }
            } else {
                if (element.id === 'build'){
                  element.setAttribute('class', 'btn active mr-2 serviceBtn');
                  element.setAttribute('aria-pressed', 'true');
                } else if (element.id === 'redesign'){
                  element.setAttribute('class', 'btn active serviceBtn');
                  element.setAttribute('aria-pressed', 'true');
                } else {
                  element.setAttribute('class', 'btn active ml-2 serviceBtn');
                  element.setAttribute('aria-pressed', 'true');
                }
            }
          });
        }
      } else if (id === 'memberSubmit'){
        const firstName = (document.getElementById('inputFirstName') as HTMLInputElement);
        const firstNameVal = firstName.value;
        const lastName = (document.getElementById('inputLastName') as HTMLInputElement);
        const lastNameVal = lastName.value;
        const email = (document.getElementById('inputEmail') as HTMLInputElement);
        const emailVal = email.value;
        const message = (document.getElementById('inputMessage') as HTMLInputElement);
        const messageVal = message.value;
        if (firstNameVal.length === 0){
          this.setInputClass(firstName, 'form-control is-invalid');
        } else {
          this.setInputClass(firstName, 'form-control is-valid');
        }
        if (lastNameVal.length === 0) {
          this.setInputClass(lastName, 'form-control is-invalid');
        } else {
          this.setInputClass(lastName, 'form-control is-valid');
        }
        if (emailVal.length === 0) {
          this.setInputClass(email, 'form-control is-invalid');
        } else {
          this.setInputClass(email, 'form-control is-valid');
        }
        if (messageVal.length === 0) {
          this.setInputClass(message, 'form-control is-invalid');
        } else {
          this.setInputClass(message, 'form-control is-valid');
        }
        if (firstNameVal.length !== 0 && lastNameVal.length !== 0 && emailVal.length !== 0 && messageVal.length !== 0) {
          const resp = this.memberFormService.postForm(firstNameVal, lastNameVal, emailVal, messageVal);
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
        const name = (document.getElementById('inputFirstName') as HTMLInputElement);
        const nameVal = name.value;
        const business = (document.getElementById('inputLastName') as HTMLInputElement);
        const businessVal = business.value;
        const email = (document.getElementById('inputEmail') as HTMLInputElement);
        const emailVal = email.value;
        const message = (document.getElementById('inputMessage') as HTMLInputElement);
        const messageVal = message.value;
        const serviceButtons = document.getElementsByClassName('serviceBtn');
        let serviceButtonsVal = false;
        let serviceButtonsId = '';
        Array.from(serviceButtons).forEach((element) => {
          if (element.getAttribute('class').includes('active')) {
            serviceButtonsVal = true;
            serviceButtonsId = element.getAttribute('id');
          }
        });
        if (nameVal.length === 0) {
          this.setInputClass(name, 'form-control is-invalid');
        } else {
          this.setInputClass(name, 'form-control is-valid');
        }
        if (businessVal.length === 0) {
          this.setInputClass(business, 'form-control is-invalid');
        } else {
          this.setInputClass(business, 'form-control is-valid');
        }
        if (emailVal.length === 0) {
          this.setInputClass(email, 'form-control is-invalid');
        } else {
          this.setInputClass(email, 'form-control is-valid');
        }
        if (messageVal.length === 0 ){
          this.setInputClass(message, 'form-control is-invalid');
        } else {
          this.setInputClass(message, 'form-control is-valid');
        }
        if (!serviceButtonsVal) {
          if (!document.getElementById('divBad')){
            const div = document.createElement('div');
            const del = document.createElement('button');
            const span = document.createElement('span');
            div.setAttribute('class', 'alert alert-danger alert-dismissible fade show');
            div.setAttribute('id', 'divBad');
            div.innerHTML = 'Please select a service.';
            del.setAttribute('type', 'button');
            del.setAttribute('class', 'close');
            del.setAttribute('data-dismiss', 'alert');
            del.setAttribute('aria-label', 'Close');
            del.setAttribute('id', 'delNoti');
            span.setAttribute('aria-hidden', 'true');
            span.innerHTML = '&times;';
            del.appendChild(span);
            div.appendChild(del);
            document.getElementById('clientForm').appendChild(div);
          }
        }
        if (nameVal.length !== 0 && businessVal.length !== 0 && emailVal.length !== 0 &&
            messageVal.length !== 0 && serviceButtonsVal !== false){
          const resp = this.clientFormService.postForm(nameVal, businessVal, emailVal, messageVal, serviceButtonsId);
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
              document.getElementById('clientForm').appendChild(div);
            }
        }});
        }
      } else if (id === 'generalSubmit') {
        const name = (document.getElementById('inputFirstName') as HTMLInputElement);
        const nameVal = name.value;
        const affiliation = (document.getElementById('Affiliation') as HTMLInputElement);
        const affiliationVal = affiliation.value;
        const email = (document.getElementById('inputEmail') as HTMLInputElement);
        const emailVal = email.value;
        const message = (document.getElementById('inputMessage') as HTMLInputElement);
        const messageVal = message.value;
        const resp = this.generalFormService.postForm(nameVal, affiliationVal, emailVal, messageVal);
        if (nameVal.length === 0) {
          this.setInputClass(name, 'form-control is-invalid');
        } else {
          this.setInputClass(name, 'form-control is-valid');
        }
        if (affiliationVal.length === 0) {
          this.setInputClass(affiliation, 'form-control is-invalid');
        } else {
          this.setInputClass(affiliation, 'form-control is-valid');
        }
        if (emailVal.length === 0) {
          this.setInputClass(email, 'form-control is-invalid');
        } else {
          this.setInputClass(email, 'form-control is-valid');
        }
        if (messageVal.length === 0){
          this.setInputClass(message, 'form-control is-invalid');
        } else {
          this.setInputClass(message, 'form-control is-valid');
        }
        if (nameVal.length !== 0 && affiliationVal.length !== 0 && emailVal.length !== 0 && messageVal.length !== 0) {
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
              document.getElementById('generalForm').appendChild(div);
            }
          }});
        }
      }
    });
  }
  ngAfterContentInit(): void{
    window.onload = () => {
      document.getElementById('potentialMemberLink').onclick = () => {
        this.state = 'potential member';
        document.getElementById('memberImg').setAttribute('style', 'color: rgb(65,76,157)');
        document.getElementById('clientImg').setAttribute('style', 'color: black');
        document.getElementById('generalImg').setAttribute('style', 'color: black');
      };
      document.getElementById('potentialClientLink').onclick = () => {
        this.state = 'potential client';
        document.getElementById('clientImg').setAttribute('style', 'color: rgb(65,76,157)');
        document.getElementById('memberImg').setAttribute('style', 'color: black');
        document.getElementById('generalImg').setAttribute('style', 'color: black');
      };
      document.getElementById('generalLink').onclick = () => {
        this.state = 'general';
        document.getElementById('generalImg').setAttribute('style', 'color: rgb(65,76,157)');
        document.getElementById('memberImg').setAttribute('style', 'color: black');
        document.getElementById('clientImg').setAttribute('style', 'color: black');
      };
    };
  }
  setInputClass(input, isValid): void {
    input.setAttribute('class', isValid);
  }
}
