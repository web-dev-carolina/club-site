import { Component } from '@angular/core';

@Component({
    selector: 'app-home-logged',
    templateUrl: 'home-logged.component.html',
    styleUrls: ['home-logged.component.css']
})
export class HomeLoggedComponent {
    user: string;
    constructor(){
        this.user = sessionStorage.getItem('user');
    }
}
