import { TestBed } from '@angular/core/testing';

import { EditModeWorkoutService } from './edit-mode-workout-service';

describe('EditModeWorkoutService', () => {
  let service: EditModeWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditModeWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
