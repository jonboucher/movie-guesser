import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuessingGame } from './features/guessing-game/guessing-game';
import { Stats } from './features/stats/stats';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GuessingGame, Stats],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('movie-guesser');
}
