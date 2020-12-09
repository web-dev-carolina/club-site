// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// This Module's Components
import { CreateComponent } from './create.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CreateComponent,
    ],
    exports: [
        CreateComponent,
    ]
})
export class CreateModule {

}
