import { Component } from '@angular/core';
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
export class InquiriesComponent {
    memberForms: MemberForm[];
    clientForms: ClientForm[];
    generalForms: GeneralForm[];
    display: string;
    constructor(private memberFormService: MemberFormService,
                private clientFormService: ClientFormService,
                private generalFormService: GeneralFormService){
        this.memberForms = [];
        this.display = 'memberForm';
        this.memberFormService.getForms().subscribe((memberForms: any[]) => {
            this.memberForms = memberForms;
        });
        this.clientFormService.getForms().subscribe((clientForms: any[]) => {
            this.clientForms = clientForms;
        });
        this.generalFormService.getForms().subscribe((generalForms: any[]) => {
            this.generalForms = generalForms;
        });
        window.addEventListener('click', (e) => {
            const element = (e.target as HTMLElement);
            const clas = element.getAttribute('class');
            const id = element.id;
            if (clas.includes('formToggle')){
              if (id === 'memberForm'){
                this.display = 'memberForm';
              } else if (id === 'clientForm'){
                this.display = 'clientForm';
              } else if (id === 'generalForm'){
                this.display = 'generalForm';
              }
            }
          });
    }
}
