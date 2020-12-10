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
    constructor(private usersService: UsersService){
        this.usersService.getUsers().subscribe((users: any[]) => {
            this.users = users;
        });
    }
}
