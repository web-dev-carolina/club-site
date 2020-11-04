import { Component } from '@angular/core';
import { ProjectService } from '../../services/projects.service';
import { Project } from '../../../Project';

@Component({
  selector: 'app-project',
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.css'],
})
export class ProjectComponent {
  projects: Project[];

  constructor(private projectService: ProjectService){
    this.projectService.getProjects().subscribe((projects: any[]) => {
      this.projects = projects;
    });
  }
}
