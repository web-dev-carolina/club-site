// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// This Module's Components
import { AnnouncementComponent } from './announcement.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AnnouncementComponent,
    ],
    exports: [
        AnnouncementComponent,
    ]
})
export class AnnouncementModule {

}
