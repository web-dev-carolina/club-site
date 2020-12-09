// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { LandingComponent } from './landing.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SinglePComponent } from './single-page/single-p.component';

@NgModule({
    imports: [

    ],
    declarations: [
        LandingComponent,
        TopBarComponent,
        SinglePComponent
    ],
    exports: [
        LandingComponent,
    ]
})
export class LandingModule {

}
