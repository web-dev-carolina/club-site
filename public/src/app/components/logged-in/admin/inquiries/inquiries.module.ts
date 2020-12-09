// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// This Module's Components
import { InquiriesComponent } from './inquiries.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        InquiriesComponent,
    ],
    exports: [
        InquiriesComponent,
    ]
})
export class InquiriesModule {

}
