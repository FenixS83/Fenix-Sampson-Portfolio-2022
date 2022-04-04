import { Component, OnInit, } from '@angular/core';
import { IProject } from './projectsInterface';
import { ProjectService } from '../projects-list/project.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  pageTitle = 'Projects List';
  imageWidth=75;
  imageMargin = 2;
  errorMessage = 'something went wrong';
  sub!: Subscription;

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProjects = this.performFilter(value);
  }

  filteredProjects: IProject[] = [];
  projects: IProject[] = [];

  
  constructor(private projectService: ProjectService ) { }
  
  performFilter(filterBy: string): IProject[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.projects.filter((project: IProject) =>
      project.technologies.toLocaleLowerCase().includes(filterBy));  
  }



  ngOnInit(): void {
    this.sub = this.projectService.getProjects().subscribe({
      next: (projects: IProject[]) => {
        this.projects = projects;
        this.filteredProjects = this.projects;
      },
      error: err => this.errorMessage = err
    });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }



}
