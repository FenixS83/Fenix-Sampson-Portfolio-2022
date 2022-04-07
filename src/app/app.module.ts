import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SelfieComponent } from './selfie/selfie.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectDetailGuard } from './project-details/project-detail.guard';
import { CertificationsComponent } from './certifications/certifications.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatProgressBar } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SelfieComponent,
    WelcomeComponent,
    AboutComponent,
    ResumeComponent,
    ProjectsListComponent,
    ProjectDetailsComponent,
    CertificationsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'selfie', component: SelfieComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'projects', component: ProjectsListComponent },
      { path: 'projects/:id', component: ProjectDetailsComponent, canActivate: [ProjectDetailGuard] },
      { path: 'certifications', component: CertificationsComponent },
    ]),
    FormsModule,
    RouterTestingModule,
    BrowserAnimationsModule,
    // MatProgressBar

  ],

  exports: [
  ],

  providers: [RouterModule, ProjectDetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
