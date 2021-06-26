import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMovie } from './movies';
import { MovieService } from './movie.service';

@Component({
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  pageTitle = 'Movie List';
  imageWidth = 95;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  sub!: Subscription;

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMovies = this.performFilter(value);
  }

  private _nameSorted = false;
  get nameSorted(): boolean {
    return this._nameSorted;
  }

  private _yearSorted = false;
  get yearSorted(): boolean {
    return this._yearSorted;
  }

  private _titleTypeSorted = false;
  get titleTypeSorted(): boolean {
    return this._titleTypeSorted;
  }

  private _directorSorted = false;
  get directorSorted(): boolean {
    return this._directorSorted;
  }

  private _imdbRatingSorted = false;
  get imdbRatingSorted(): boolean {
    return this._imdbRatingSorted;
  }

  private _dateWatchedSorted = false;
  get dateWatchedSorted(): boolean {
    return this._dateWatchedSorted;
  }

  filteredMovies: IMovie[] = [];
  movies: IMovie[] = [];

  constructor(private movieService: MovieService) {}

  performFilter(filterBy: string): IMovie[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter((movie: IMovie) =>
      movie.name.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.movieService.getMovies().subscribe({
      next: movies => {
        this.movies = movies;
        this.filteredMovies = this.movies;
      },
      error: err  => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(name: string, message: string): void {
    this.pageTitle = 'Movie List: ' + name + ' ' + message;
  }

  sortByName(): void {
    if (this.nameSorted) {
      this.filteredMovies.sort((a, b) => (a.name < b.name) ? 1 : -1);
      this._nameSorted = false;
    } else {
      this.filteredMovies.sort((a, b) => (a.name > b.name) ? 1 : -1);
      this._nameSorted = true;
    }
  }

  sortByYear(): void {
    if (this.yearSorted) {
      this.filteredMovies.sort((a, b) => (a.year < b.year) ? 1 : -1);
      this._yearSorted = false;
    } else {
      this.filteredMovies.sort((a, b) => (a.year > b.year) ? 1 : -1);
      this._yearSorted = true;
    }
  }
  
  sortByTitleType(): void {
    if (this.titleTypeSorted) {
      this.filteredMovies.sort((a, b) => (a.titleType < b.titleType) ? 1 : -1);
      this._titleTypeSorted = false;
    } else {
      this.filteredMovies.sort((a, b) => (a.titleType > b.titleType) ? 1 : -1);
      this._titleTypeSorted = true;
    }
  }

  sortByDirector(): void {
    if (this.directorSorted) {
      this.filteredMovies.sort((a, b) => (a.director < b.director) ? 1 : -1);
      this._directorSorted = false;
    } else {
      this.filteredMovies.sort((a, b) => (a.director > b.director) ? 1 : -1);
      this._directorSorted = true;
    }
  }

  sortByIMDbRating(): void {
    if (this.imdbRatingSorted) {
      this.filteredMovies.sort((a, b) => (a.imdbRating < b.imdbRating) ? 1 : -1);
      this._imdbRatingSorted = false;
    } else {
      this.filteredMovies.sort((a, b) => (a.imdbRating > b.imdbRating) ? 1 : -1);
      this._imdbRatingSorted = true;
    }
  }

  sortByDateWatched(): void {
    if (this.dateWatchedSorted) {
      this.filteredMovies.sort((a, b) => (new Date(a.dateWatched) < new Date(b.dateWatched)) ? 1 : -1);
      this._dateWatchedSorted = false;
    } else {
      this.filteredMovies.sort((a, b) => (new Date(a.dateWatched) > new Date(b.dateWatched)) ? 1 : -1);
      this._dateWatchedSorted = true;
    }
  }
}
