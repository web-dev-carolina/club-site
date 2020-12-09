// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { LoggedInComponent } from './logged-in.component';
import { TopBarLoggedInComponent } from './top-bar-logged-in/top-bar-logged-in.component';

@NgModule({
    imports: [
    ],
    declarations: [
        LoggedInComponent,
        TopBarLoggedInComponent
    ],
    exports: [
        LoggedInComponent,
    ]
})
export class LandingModule {

}
