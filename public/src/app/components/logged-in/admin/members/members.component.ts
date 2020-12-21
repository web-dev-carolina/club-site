import { Component } from '@angular/core';
import { UsersService } from '../../../../services/users.service';
import { User } from '../../../../../User';
import { Project } from '../../../../../Project';
import { ProjectService } from '../../../../services/projects.service';

@Component({
    selector: 'app-members',
    templateUrl: 'members.component.html',
    styleUrls: ['members.component.css']
})
export class MembersComponent {
    users: User[];
    display: string;
    projects: Project[];

    constructor(private usersService: UsersService, private projectsService: ProjectService){
        this.display = 'add';
        this.usersService.getUsers().subscribe((users: any[]) => {
            this.users = users;
        });
        this.projectsService.getProjects().subscribe((projects: any[]) => {
          this.projects = projects;
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
            } else if (id === 'createButton') {
              const firstName = (document.getElementById('fnameInput') as HTMLInputElement).value;
              const lastName = (document.getElementById('lnameInput') as HTMLInputElement).value;
              const email = (document.getElementById('emailInput') as HTMLInputElement).value;
              const team = (document.getElementById('placementInput') as HTMLInputElement).value;
              const newUser = new User(firstName + lastName, '', this.getType(team), team);
              const respEvent = await this.usersService.newUser(newUser);
              this.users.push(newUser);
              this.addSuccessDiv();
            }
        });
    }
    getType(team): any {
      return (this.projects.filter(project => { if (project.name === team) { return project.type; } })[0]).type;
    }

    addSuccessDiv(): void {
      if (!document.getElementById('divSuccess')) {
        const div = document.createElement('div');
        const del = document.createElement('button');
        const span = document.createElement('span');
        div.setAttribute('class', 'alert alert-success alert-dismissible fade show');
        div.setAttribute('id', 'divSuccess');
        div.innerHTML = 'Success!';
        del.setAttribute('type', 'button');
        del.setAttribute('class', 'close');
        del.setAttribute('data-dismiss', 'alert');
        del.setAttribute('aria-label', 'Close');
        del.setAttribute('id', 'delNoti');
        span.setAttribute('aria-hidden', 'true');
        span.innerHTML = '&times;';
        del.appendChild(span);
        div.appendChild(del);
        document.getElementById('newUserForm').appendChild(div);
      }
    }
}
