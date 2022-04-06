import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IProject } from './projectsInterface';
import _jsonURL from 'projects.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _projectsURL = 'projects.json';

  Projects: any | IProject[] = _jsonURL;

  constructor(private http: HttpClient) { }

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this._projectsURL)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getProject(id: number): Observable<IProject | undefined> {
    return this.getProjects().pipe(
      map((projects: IProject[]) => projects.find(p => p.id === id))
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
