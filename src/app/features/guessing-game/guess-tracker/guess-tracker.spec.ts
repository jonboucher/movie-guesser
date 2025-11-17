import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessTracker } from './guess-tracker';

describe('GuessTracker', () => {
  let component: GuessTracker;
  let fixture: ComponentFixture<GuessTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuessTracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuessTracker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
