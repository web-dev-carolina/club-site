// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// This Module's Components
import { TopBarLoggedInComponent } from './top-bar-logged-in.component';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [
        TopBarLoggedInComponent,
    ],
    exports: [
        TopBarLoggedInComponent,
    ]
})
export class TopBarLoggedInModule {

}
