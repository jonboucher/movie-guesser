import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuessingGame } from './features/guessing-game/guessing-game';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GuessingGame],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('movie-guesser');
}
