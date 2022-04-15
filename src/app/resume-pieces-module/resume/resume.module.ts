import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResumeComponent } from 'src/app/resume/resume.component';
import { CertificationsComponent } from 'src/app/certifications/certifications.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ResumeComponent,
    CertificationsComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'resume', component: ResumeComponent },
      { path: 'certifications', component: CertificationsComponent },
      { path: 'contact', component: ContactComponent },
    ]),
  ],

  providers: [RouterModule],
})
export class ResumeModule { }
