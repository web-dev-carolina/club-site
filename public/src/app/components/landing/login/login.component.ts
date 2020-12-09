import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {
    constructor(private loginService: LoginService){
        window.addEventListener('click', (e) => {
            if ((e.target as HTMLElement).id === 'submitLogin'){
                console.log('here');
            }
        });
    }
}
