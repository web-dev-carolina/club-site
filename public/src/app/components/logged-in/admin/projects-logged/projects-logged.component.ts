import { Component } from '@angular/core';
import { ProjectService } from '../../../../services/projects.service';
import { Project } from '../../../../../Project';

@Component({
    selector: 'app-projects-logged',
    templateUrl: 'projects-logged.component.html',
    styleUrls: ['projects-logged.component.css']
})
export class ProjectsLoggedComponent {
    projects: Project[];
    constructor(private projectService: ProjectService){
        this.projectService.getProjects().subscribe((projects: any[]) => {
            this.projects = projects;
        });
    }
    goToLink(url: string): void{
        window.open(url, '_blank');
    }
}
