import { Component } from '@angular/core';
import { UsersService } from '../../../../services/users.service';
import { User } from '../../../../../User';

@Component({
    selector: 'app-members',
    templateUrl: 'members.component.html',
    styleUrls: ['members.component.css']
})
export class MembersComponent {
    users: User[];
    display: string;

    constructor(private usersService: UsersService){
        this.display = 'add';
        this.usersService.getUsers().subscribe((users: any[]) => {
            this.users = users;
        });
        window.addEventListener('click', async (e) => {
            const element = (e.target as HTMLElement);
            const clas = element.getAttribute('class');
            const id = element.id;
            if (clas.includes('memberToggle')) {
              if (id === 'add') {
                this.display = 'add';
              } else if (id === 'remove') {
                this.display = 'remove';
              } else if (id === 'edit') {
                this.display = 'edit';
              }
            }
        });
    }
}
