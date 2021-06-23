import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMovie } from './movies';
import { MovieService } from './movie.service';

@Component({
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  pageTitle = 'Movie Detail';
  errorMessage = '';
  movie: IMovie | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private movieService: MovieService) {
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getMovie(id);
    }
  }

  getMovie(id: number): void {
    this.movieService.getMovie(id).subscribe({
      next: movie => this.movie = movie,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/movies']);
  }
}
