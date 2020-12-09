import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {
    constructor(private loginService: LoginService, private router: Router){
        window.addEventListener('click', async (e) => {
            if ((e.target as HTMLElement).id === 'submitLogin'){
                const inputUser = (document.getElementById('usernameInput') as HTMLInputElement).value;
                const inputPass = (document.getElementById('passwordInput') as HTMLInputElement).value;
                const resp = await this.loginService.login(inputUser, inputPass);
                if (!resp){
                    if (!document.getElementById('divBad')){
                        const div = document.createElement('div');
                        const del = document.createElement('button');
                        const span = document.createElement('span');
                        div.setAttribute('class', 'alert alert-danger alert-dismissible fade show');
                        div.setAttribute('id', 'divBad');
                        div.innerHTML = 'Invalid credentials.';
                        del.setAttribute('type', 'button');
                        del.setAttribute('class', 'close');
                        del.setAttribute('data-dismiss', 'alert');
                        del.setAttribute('aria-label', 'Close');
                        del.setAttribute('id', 'delNoti');
                        span.setAttribute('aria-hidden', 'true');
                        span.innerHTML = '&times;';
                        del.appendChild(span);
                        div.appendChild(del);
                        document.getElementById('loginForm').appendChild(div);
                    }
                    return;
                }
                if (resp[0].type === 'admin'){
                    this.router.navigateByUrl('/loggedIn/admin/home');
                }
                return;
            }
        });
    }
}
