import { Component } from '@angular/core';
import { Movie } from './models/movie.type';

@Component({
  selector: 'app-guessing-game',
  imports: [],
  templateUrl: './guessing-game.html',
  styleUrl: './guessing-game.scss',
})
export class GuessingGame {
  guesses = 0;

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
  };
}
