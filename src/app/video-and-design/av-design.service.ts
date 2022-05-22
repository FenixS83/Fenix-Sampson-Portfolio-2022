import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IVideo } from './avDesignsInterface';
import _jsonURL from '../../api/myVideos/videos.json';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private _videosURL = 'api/myVideos/videos.json';

  Videos: any | IVideo[] = _jsonURL;

  constructor(private http: HttpClient) { }

  getVideos(): Observable<IVideo[]> {
    return this.http.get<IVideo[]>(this._videosURL)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getVideo(id: number): Observable<IVideo | undefined> {
    return this.getVideos().pipe(
      map((videos: IVideo[]) => videos.find(v => v.videoID === id))
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
