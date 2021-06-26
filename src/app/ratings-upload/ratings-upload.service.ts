import { HttpClient, HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RatingsUploadService {

  private baseUrl = 'http://localhost:8080'
    
  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
      const formData: FormData = new FormData();
      formData.append('file', file);
      const request = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
          reportProgress: true,
          responseType: 'json'
      });
      return this.http.request(request);
  }

  getFiles(): Observable<any> {
      return this.http.get(`${this.baseUrl}/files`);
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
