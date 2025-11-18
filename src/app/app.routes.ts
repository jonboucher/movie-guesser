import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./features/guessing-game/guessing-game').then((m) => m.GuessingGame);
    },
  },
  {
    path: 'stats',
    loadComponent: () => {
      return import('./features/stats/stats').then((m) => m.Stats);
    },
  },
];
