// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// This Module's Components
import { ProjectsLoggedComponent } from './projects-logged.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ProjectsLoggedComponent,
    ],
    exports: [
        ProjectsLoggedComponent,
    ]
})
export class ProjectsLoggedModule {

}
