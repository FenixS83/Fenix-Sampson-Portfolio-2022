import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ICertificate } from './certificatesInterface';
import _jsonURL from '../../api/certificates/certificates.json';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  private _certificatesURL = 'api/certificates/certificates.json';

  Certificates: any | ICertificate[] = _jsonURL;

  constructor(private http: HttpClient) { }

  getCertificates(): Observable<ICertificate[]> {
    return this.http.get<ICertificate[]>(this._certificatesURL)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getCertificate(id: number): Observable<ICertificate | undefined> {
    return this.getCertificates().pipe(
      map((certificates: ICertificate[]) => certificates.find(c => c.certificateId === id))
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
