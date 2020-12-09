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
                const inputUser = (document.getElementById('usernameInput') as HTMLInputElement).value;
                const inputPass = (document.getElementById('passwordInput') as HTMLInputElement).value;
                const resp = this.loginService.login(inputUser, inputPass);
                console.log(resp);
            }
        });
    }
}
