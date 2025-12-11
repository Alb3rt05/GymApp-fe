import { Component } from '@angular/core';
import { ShowWorkoutService } from '../services/show-workout-service';
import { EditModeWorkoutService } from '../services/edit-mode-workout-service';
import { ShowWorkout } from '../show-workout/show-workout';
import { FormModifyWorkout } from '../form-modify-workout/form-modify-workout';
@Component({
  selector: 'app-workout',
  imports: [ShowWorkout, FormModifyWorkout],
  templateUrl: './workout.html',
  styleUrl: './workout.css',
})
export class Workout {
  constructor(public workoutService: ShowWorkoutService, public editModeWorkoutService: EditModeWorkoutService) { }

  returnBack() {
    this.workoutService.workout = false;
  }
}
