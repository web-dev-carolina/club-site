// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// This Module's Components
import { LoggedInComponent } from './logged-in.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule
    ],
    declarations: [
        LoggedInComponent
    ],
    exports: [
        LoggedInComponent,
    ]
})
export class LandingModule {

}
