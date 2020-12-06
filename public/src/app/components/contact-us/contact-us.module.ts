// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// This Module's Components
import { ContactUsComponent } from './contact-us.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ContactUsComponent,
    ],
    exports: [
        ContactUsComponent,
    ]
})
export class ContactUsModule {

}
