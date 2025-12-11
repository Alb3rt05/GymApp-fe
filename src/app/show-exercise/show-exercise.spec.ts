import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExercise } from './show-exercise';

describe('ShowExercise', () => {
  let component: ShowExercise;
  let fixture: ComponentFixture<ShowExercise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowExercise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowExercise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
