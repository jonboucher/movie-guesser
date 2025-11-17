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

  handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    this.gameManager.remainingGuesses.update((num) => num - 1);
    console.log(this.movieGuess);
  }
}
