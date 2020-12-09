import { Component } from '@angular/core';
import { MemberFormService } from '../../../../services/memberForm.service';
import { ClientFormService } from '../../../../services/clientForm.service';
import { GeneralFormService } from '../../../../services/generalForm.service';

@Component({
    selector: 'app-inquiries',
    templateUrl: 'inquiries.component.html',
    styleUrls: ['inquiries.component.css']
})
export class InquiriesComponent {
    memberForms: object[];
    constructor(private memberFormService: MemberFormService,
                private clientFormService: ClientFormService,
                private generalFormService: GeneralFormService){
        this.memberForms = [];
        this.memberFormService.getForms().subscribe((memberForm: any[]) => {
            this.memberForms.push(memberForm);
        });
    }
}
