import { Component, inject } from '@angular/core';
import { GuessForm } from './guess-form/guess-form';
import { GuessTracker } from './guess-tracker/guess-tracker';
import { GuessClue } from './guess-clue/guess-clue';
import { GameManager } from '../../services/game-manager';

@Component({
  selector: 'app-guessing-game',
  imports: [GuessForm, GuessTracker, GuessClue],
  templateUrl: './guessing-game.html',
  styleUrl: './guessing-game.scss',
})
export class GuessingGame {
  gameManager = inject(GameManager);
  movie = this.gameManager.movie;
}
