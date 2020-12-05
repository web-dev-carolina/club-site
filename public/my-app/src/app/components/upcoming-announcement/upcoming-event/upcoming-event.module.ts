// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// This Module's Components
import { UpcomingEventComponent } from './upcoming-event.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        UpcomingEventComponent,
    ],
    exports: [
        UpcomingEventComponent,
    ]
})
export class UpcomingEventModule {

}
