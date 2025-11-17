import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessClue } from './guess-clue';

describe('GuessClue', () => {
  let component: GuessClue;
  let fixture: ComponentFixture<GuessClue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuessClue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuessClue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
