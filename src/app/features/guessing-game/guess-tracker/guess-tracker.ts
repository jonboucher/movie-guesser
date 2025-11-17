import { Component, inject } from '@angular/core';
import { GameManager } from '../../../services/game-manager';

@Component({
  selector: 'app-guess-tracker',
  imports: [],
  templateUrl: './guess-tracker.html',
  styleUrl: './guess-tracker.scss',
})
export class GuessTracker {
  gameManager = inject(GameManager);
  guessNumber = this.gameManager.remainingGuesses;
}
