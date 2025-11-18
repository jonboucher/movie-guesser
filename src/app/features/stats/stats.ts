import { Component, inject, signal } from '@angular/core';
import { GameManager } from '../../services/game-manager';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class Stats {
  gameManager = inject(GameManager);
}
