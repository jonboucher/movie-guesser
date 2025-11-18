import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameManager } from '../../../services/game-manager';

@Component({
  selector: 'app-guess-form',
  imports: [FormsModule],
  templateUrl: './guess-form.html',
  styleUrl: './guess-form.scss',
})
export class GuessForm {
  gameManager = inject(GameManager);
  movieGuess: string = '';
  movieTitle: string = this.gameManager.movie.title;

  handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    if (this.movieGuess.length > 0) {
      this.gameManager.remainingGuesses.update((num) => num - 1);

      if (this.movieGuess.trim().toLowerCase() === this.movieTitle.trim().toLowerCase()) {
        console.log('Victory');
      }
    }
  }
}
