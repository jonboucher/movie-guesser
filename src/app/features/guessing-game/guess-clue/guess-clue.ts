import { Component, inject, input } from '@angular/core';
import { GameManager } from '../../../services/game-manager';

@Component({
  selector: 'app-guess-clue',
  standalone: true,
  imports: [],
  templateUrl: './guess-clue.html',
  styleUrl: './guess-clue.scss',
})
export class GuessClue {
  gameManager = inject(GameManager);
  clue = input<string | string[] | number>('');

  get clueDisplay(): string {
    const val = this.clue();
    return Array.isArray(val) ? val.join(' • ') : val.toString();
  }

  title = input('');
}
