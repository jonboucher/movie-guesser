import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../features/guessing-game/models/movie.type';
import { ApiResults } from '../models/results.type';
import { Observable } from 'rxjs';
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
    title: 'Star Wars',
    release_date: '1977',
    vote_average: 8.6,
    overview:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    cast: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
    genres: [1, 2, 3],
    tagline: 'May the force be with you.',
    backdrop_path: 'image.jpg',
  });

  fetchMovie(): Observable<ApiResults> {
    const url = 'https://api.themoviedb.org/3/discover/movie';
    return this.http.get<ApiResults>(url, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${environment.authToken}`,
      },
    });
  }

  importGameData(): void {
    this.fetchMovie().subscribe({
      next: (data) => {
        const result = data.results[0];
        console.log(data.results[0]);
        this.movie.set({
          id: result.id,
          title: result.title,
          release_date: result.release_date,
          vote_average: result.vote_average,
          overview: result.overview,
          cast: [], // requires /movie/{id}/credits
          genres: result.genres,
          tagline: '',
          backdrop_path: result.backdrop_path,
        });
      },
    });
  }

  initializeGame() {
    this.importGameData();
    this.remainingGuesses.set(5);
    this.gameOverMessage.set('');
    this.router.navigate(['']);
  }
}
