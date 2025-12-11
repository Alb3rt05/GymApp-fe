import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWorkout } from './show-workout';

describe('ShowWorkout', () => {
  let component: ShowWorkout;
  let fixture: ComponentFixture<ShowWorkout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowWorkout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowWorkout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
