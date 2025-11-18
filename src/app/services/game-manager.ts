import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../features/guessing-game/models/movie.type';

@Injectable({
  providedIn: 'root',
})
export class GameManager {
  router = inject(Router);

  remainingGuesses = signal(5);
  gamesWon = signal(0);
  gamesLost = signal(0);
  gameOverMessage = signal('');

  movie: Movie = {
    id: 0,
    title: 'Star Wars',
    release_date: '1977',
    vote_average: 8.6,
    overview:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    cast: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
    genres: ['science fiction', 'adventure', 'space opera'],
    tagline: 'May the force be with you.',
    image: 'image.jpg',
  };

  initializeGame() {
    this.remainingGuesses.set(5);
    this.gameOverMessage.set('');
    this.router.navigate(['']);
  }
}
