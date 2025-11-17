import { TestBed } from '@angular/core/testing';

import { GameManager } from './game-manager';

describe('GameManager', () => {
  let service: GameManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
