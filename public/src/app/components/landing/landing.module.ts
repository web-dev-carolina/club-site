// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { LandingComponent } from './landing.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SinglePComponent } from './single-page/single-p.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule.forRoot([
        { path: '', component: SinglePComponent},
        { path: 'login', component: LoginComponent}]),
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
