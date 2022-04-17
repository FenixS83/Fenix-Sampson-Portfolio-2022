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
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectModule } from './projects-module/project/project.module';
import { ResumeModule } from './resume-pieces-module/resume/resume.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SelfieComponent,
    WelcomeComponent,
    AboutComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PdfViewerModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'selfie', component: SelfieComponent },

    ]),
    RouterTestingModule,
    BrowserAnimationsModule,
    ProjectModule,
    ResumeModule,
    NgxExtendedPdfViewerModule

  ],

  exports: [
  ],

  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
