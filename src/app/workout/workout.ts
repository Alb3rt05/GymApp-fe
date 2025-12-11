import { Component } from '@angular/core';
import { ShowWorkoutService } from '../services/show-workout-service';
@Component({
  selector: 'app-workout',
  imports: [],
  templateUrl: './workout.html',
  styleUrl: './workout.css',
})
export class Workout {
  constructor(public workoutService: ShowWorkoutService) {}

  returnBack() {
    this.workoutService.workout = false;
  }
}
