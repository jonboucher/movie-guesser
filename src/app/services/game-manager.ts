import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../features/guessing-game/models/movie.type';
import { MovieResult, MovieCredits, MovieDetails } from '../models/apiResults.type';
import { map, switchMap } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GameManager {
  router = inject(Router);
  http = inject(HttpClient);

  remainingGuesses = signal(5);
  gamesWon = signal(0);
  gamesLost = signal(0);
  gameOverMessage = signal('');

  movie = signal<Movie>({
    id: 0,
    title: '',
    release_date: '',
    vote_average: 0,
    overview: '',
    director: [''],
    cast: [''],
    genres: [''],
    tagline: '',
    backdrop_path: '',
  });

  baseUrl = 'https://api.themoviedb.org/3';
  headers = {
    accept: 'application/json',
    Authorization: `Bearer ${environment.authToken}`,
  };

  fetchMovie() {
    const randomPage = Math.floor(Math.random() * 100) + 1;
    return this.http
      .get<{ results: MovieResult[] }>(
        `${this.baseUrl}/discover/movie?page=${randomPage}&sort_by=popularity.desc&vote_average.gte=6&with_original_language=en&with_watch_monetization_types=flatrate`,
        {
          headers: this.headers,
        }
      )
      .pipe(map((data) => data.results[Math.floor(Math.random() * 20)]));
  }

  fetchCast(movieId: number) {
    return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${movieId}/credits`, {
      headers: this.headers,
    });
  }

  fetchDetails(movieId: number) {
    return this.http.get<MovieDetails>(`${this.baseUrl}/movie/${movieId}`, {
      headers: this.headers,
    });
  }

  loadMovie() {
    this.fetchMovie()
      .pipe(
        switchMap((movie) =>
          this.fetchCast(movie.id).pipe(
            switchMap((cast) =>
              this.fetchDetails(movie.id).pipe(
                map((details) => ({
                  movie,
                  cast,
                  details,
                }))
              )
            )
          )
        )
      )
      .subscribe(({ movie, cast, details }) => {
        console.log(cast);
        this.movie.set({
          id: movie.id,
          title: movie.title ?? 'Unknown Title',
          release_date: movie.release_date ?? '',
          vote_average: movie.vote_average ?? 0,
          overview: movie.overview ?? '',
          director: cast.crew?.map((c: any) => (c.job === 'Director' ? c.name : '')) ?? [],
          cast: cast.cast?.map((c: any) => `${c.name} as ${c.character}`).slice(0, 3) ?? [],
          genres: details.genres?.map((g: any) => g.name) ?? [],
          tagline: details.tagline ?? '',
          backdrop_path: movie.backdrop_path ?? '',
        });
      });
  }

  initializeGame() {
    this.loadMovie();
    this.remainingGuesses.set(5);
    this.gameOverMessage.set('');
    this.router.navigate(['']);
  }
}
