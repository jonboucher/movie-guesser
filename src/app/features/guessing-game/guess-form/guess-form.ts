import { Component, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GameManager } from '../../../services/game-manager';

@Component({
  selector: 'app-guess-form',
  imports: [FormsModule],
  templateUrl: './guess-form.html',
  styleUrl: './guess-form.scss',
})
export class GuessForm {
  gameManager = inject(GameManager);
  router = inject(Router);

  movieGuess: string = '';
  movieTitle = input<string>('');

  handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    if (this.movieGuess.length > 0) {
      this.gameManager.remainingGuesses.update((num) => num - 1);
      this.handleWin();
    }

    this.handleLoss();
    this.movieGuess = '';
  }

  handleWin() {
    if (this.movieGuess.trim().toLowerCase() === this.movieTitle().trim().toLowerCase()) {
      this.gameManager.gamesWon.update((num) => num + 1);
      this.gameManager.gameOverMessage.set('You won!');
      this.router.navigate(['/stats']);
    }
  }

  handleLoss() {
    if (this.gameManager.remainingGuesses() <= 0) {
      this.gameManager.gamesLost.update((num) => num + 1);
      this.gameManager.gameOverMessage.set('You Lost!');
      this.router.navigate(['/stats']);
    }
  }
}
