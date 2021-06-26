import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IMovie } from './movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // If using Stackblitz, replace the url with this line
  // because Stackblitz can't find the api folder.
  // private movieUrl = 'assets/movies/movies.json'; // mock data
  private movieUrl = 'https://movielib-api.herokuapp.com/api/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(`${this.movieUrl}`);
  }

  // Get one movie
  // Since we are working with a json file, we can only retrieve all movies
  // So retrieve all movies and then find the one we want using 'map'
  getMovie(id: number): Observable<IMovie | undefined> {
    return this.getMovies()
      .pipe(
        map((movies: IMovie[]) => movies.find(p => p.id === id))
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
