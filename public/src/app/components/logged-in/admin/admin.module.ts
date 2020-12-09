// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// This Module's Components
import { AdminComponent } from './admin.component';
import { TopBarLoggedInComponent } from './top-bar-logged-in/top-bar-logged-in.component'

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule
    ],
    declarations: [
        AdminComponent,
        TopBarLoggedInComponent
    ],
    exports: [
        AdminComponent,
    ]
})
export class AdminModule {

}
