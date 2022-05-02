import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectsListComponent } from 'src/app/projects-list/projects-list.component';
import { ProjectDetailsComponent } from 'src/app/project-details/project-details.component';
import { ProjectDetailGuard } from 'src/app/project-details/project-detail.guard';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProjectsListComponent,
    ProjectDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'projects', component: ProjectsListComponent },
      { path: 'projects/:id', 
        canActivate: [ProjectDetailGuard], 
      component: ProjectDetailsComponent,  
      }
    ]),
  ],
  providers: [ProjectDetailGuard, {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class ProjectModule { }
