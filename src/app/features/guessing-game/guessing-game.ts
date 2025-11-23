import { Component, inject, OnInit, signal } from '@angular/core';
import { GuessForm } from './guess-form/guess-form';
import { GuessTracker } from './guess-tracker/guess-tracker';
import { GuessClue } from './guess-clue/guess-clue';
import { GameManager } from '../../services/game-manager';
import { Movie } from './models/movie.type';

@Component({
  selector: 'app-guessing-game',
  imports: [GuessForm, GuessTracker, GuessClue],
  templateUrl: './guessing-game.html',
  styleUrl: './guessing-game.scss',
})
export class GuessingGame implements OnInit {
  gameManager = inject(GameManager);

  ngOnInit(): void {
    this.gameManager.initializeGame();
  }
}
