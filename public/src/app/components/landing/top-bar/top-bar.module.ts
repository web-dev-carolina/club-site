// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// This Module's Components
import { TopBarComponent } from './top-bar.component';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [
        TopBarComponent,
    ],
    exports: [
        TopBarComponent,
    ]
})
export class TopBarModule {

}
