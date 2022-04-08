import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from '../../app/projects-list/projectsInterface';
import { ProjectService } from '../projects-list/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  pageTitle: string = 'Project Details';
  errorMessage ='';
  project: IProject | any;



  constructor(private route: ActivatedRoute,
              private router: Router,
              private projectService: ProjectService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getProject(id);
    }
  }

  getProject(id: number): void {
    this.projectService.getProject(id).subscribe({
      next: project => this.project = project,
      error: err => this.errorMessage = err
    });
  }


  onBack(): void {
    this.router.navigate(['/projects']);
  }

}
