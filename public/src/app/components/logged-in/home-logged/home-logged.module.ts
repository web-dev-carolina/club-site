// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// This Module's Components
import { HomeLoggedComponent } from './home-logged.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule
    ],
    declarations: [
        HomeLoggedComponent,
    ],
    exports: [
        HomeLoggedComponent,
    ]
})
export class HomeLoggedModule {

}
