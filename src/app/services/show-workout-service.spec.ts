import { TestBed } from '@angular/core/testing';

import { ShowWorkoutService } from './show-workout-service';

describe('ShowWorkoutService', () => {
  let service: ShowWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
