// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// This Module's Components
import { MembersComponent } from './members.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MembersComponent,
    ],
    exports: [
        MembersComponent,
    ]
})
export class MembersModule {

}
