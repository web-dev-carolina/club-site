import { Component, OnInit } from '@angular/core';
import { MemberFormService } from '../../../../services/memberForm.service';
import { ClientFormService } from '../../../../services/clientForm.service';
import { GeneralFormService } from '../../../../services/generalForm.service';
import { MemberForm } from '../../../../../MemberForm';
import { ClientForm } from '../../../../../ClientForm';
import { GeneralForm } from '../../../../../GeneralForm';


@Component({
    selector: 'app-inquiries',
    templateUrl: 'inquiries.component.html',
    styleUrls: ['inquiries.component.css']
})
export class InquiriesComponent implements OnInit {
    memberForms: MemberForm[];
    clientForms: ClientForm[];
    generalForms: GeneralForm[];
    display: string;
    constructor(private memberFormService: MemberFormService,
                private clientFormService: ClientFormService,
                private generalFormService: GeneralFormService){
        this.memberForms = [];
        this.display = 'all';
        this.memberFormService.getForms().subscribe((memberForms: any[]) => {
            this.memberForms = memberForms;
        });
        this.clientFormService.getForms().subscribe((clientForms: any[]) => {
            this.clientForms = clientForms;
        });
        this.generalFormService.getForms().subscribe((generalForms: any[]) => {
            this.generalForms = generalForms;
        });

        window.addEventListener('click', async (e) => {
          const element = (e.target as HTMLElement);
          const clas = element.getAttribute('class');
          const id = element.id;
          if (clas === null || clas === undefined){
            return;
          }
          if (clas.includes('read')) {
            if (clas.includes('read-student')) {
              const curr = this.memberForms.filter(form => { if (form._id === element.title) {return form; } })[0];
              const newForm = new MemberForm(curr.firstName, curr.lastName, curr.email, curr.message);
              newForm.setRead();
              this.memberFormService.updateForm(element.title, newForm);
              this.memberForms = this.memberForms.filter(form => { if (form._id !== element.title) { return form; } });
              this.memberForms.push(newForm);
            } else if (clas.includes('read-client')) {
              const curr = this.clientForms.filter(form => { if (form._id === element.title) {return form; } })[0];
              const newForm = new ClientForm(curr.name, curr.business, curr.email, curr.message, curr.service);
              newForm.setRead();
              // this.memberFormService.updateForm(element.title, newForm);
              // this.memberForms = this.memberForms.filter(form => { if (form._id !== element.title) { return form; } });
              // this.memberForms.push(newForm);
            } else if (clas.includes('read-general')) {
              const curr = this.generalForms.filter(form => { if (form._id === element.title) {return form; } })[0];
              const newForm = new GeneralForm(curr.name, curr.affiliation, curr.email, curr.message);
              newForm.setRead();
              // this.memberFormService.updateForm(element.title, newForm);
              // this.memberForms = this.memberForms.filter(form => { if (form._id !== element.title) { return form; } });
              // this.memberForms.push(newForm);
            }
          }
        });
    }
    ngOnInit(): void {
      window.addEventListener('click', (e) => {
        const element = (e.target as HTMLElement);
        const clas = element.getAttribute('class');
        const id = element.id;
        if (clas === null || clas === undefined){
          return;
        }
        if (clas.includes('formToggle')){
          if (id === 'memberForm'){
            this.display = 'memberForm';
          } else if (id === 'clientForm'){
            this.display = 'clientForm';
          } else if (id === 'generalForm'){
            this.display = 'generalForm';
          } else if (id === 'all'){
            this.display = 'all';
          }
        }
      });
    }
}
