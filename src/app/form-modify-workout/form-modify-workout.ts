import { Component } from '@angular/core';
import { Workout } from '../models/workout';
import { EditModeWorkoutService } from '../services/edit-mode-workout-service';
import { Exercise } from '../models/exercise';
import { ExerciseService } from '../services/exercise-service';
@Component({
  selector: 'app-form-modify-workout',
  imports: [],
  templateUrl: './form-modify-workout.html',
  styleUrl: './form-modify-workout.css',
})
export class FormModifyWorkout {
  workoutToEdit: Workout = new Workout();
  workouts: Workout[] = [];
  exercises: Exercise[] = [];
  dateToday: Date = new Date();
  constructor(public editModeWorkoutService: EditModeWorkoutService, public exerciseService: ExerciseService) { }
  ngOnInit() {
    if (localStorage.getItem('workouts') && localStorage.getItem('exercises')) {
      this.workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
      this.exercises = JSON.parse(localStorage.getItem('exercises') || '[]');
    }
    else {
      this.workouts = [];
      this.exercises = this.exerciseService.exercises;
    }
  }

  saveWorkout() {
    this.dateToday = new Date();
    this.workoutToEdit.dateCreation = this.dateToday;
    if (!this.workoutToEdit.name || this.workoutToEdit.name.trim() === '') {
      alert('Il nome del workout è obbligatorio!');
      return;
    }
    if (this.workoutToEdit.id === 0) {
      // assegno ID progressivo
      this.workoutToEdit.id = this.workoutToEdit.id + 1;
      // inserisco l'esercizio nell'array
      this.workouts.push(this.workoutToEdit);
    }
    console.log('Workout salvato:', this.workoutToEdit);
    // torno alla modalità visualizzazione (elenco)
    this.editModeWorkoutService.editModeWorkout = false;
    // resetto l'esercizio in modifica
    this.workoutToEdit = new Workout();
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }

  cancelEdit() {
    this.editModeWorkoutService.editModeWorkout = false;
    this.workoutToEdit = new Workout();
  }
}
