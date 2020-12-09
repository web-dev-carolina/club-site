// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// This Module's Components
import { LoggedInComponent } from './logged-in.component';
import { TopBarLoggedInComponent } from './top-bar-logged-in/top-bar-logged-in.component';
import { CreateComponent } from './create/create.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule
    ],
    declarations: [
        LoggedInComponent,
        TopBarLoggedInComponent,
        CreateComponent
    ],
    exports: [
        LoggedInComponent,
    ]
})
export class LandingModule {

}
