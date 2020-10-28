import { Component } from '@angular/core';
import { ProjectService } from '../../services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.css'],
})
export class ProjectComponent {
  constructor(private projectService: ProjectService){

  }
}
