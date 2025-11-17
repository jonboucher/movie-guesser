import { Component } from '@angular/core';
import { Movie } from './models/movie.type';
import { GuessForm } from './guess-form/guess-form';
import { GuessTracker } from './guess-tracker/guess-tracker';

@Component({
  selector: 'app-guessing-game',
  imports: [GuessForm, GuessTracker],
  templateUrl: './guessing-game.html',
  styleUrl: './guessing-game.scss',
})
export class GuessingGame {}
