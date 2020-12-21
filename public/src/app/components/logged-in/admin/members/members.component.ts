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
              const newUser = new User(firstName + lastName, '', this.getType(team));
            }
        });
    }
    getType(team): any {
      this.projects.filter(project => { if (project.name === team) { return project.type; } });
    }
}
