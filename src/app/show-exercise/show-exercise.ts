import { Component, signal } from '@angular/core';
import { Exercise } from '../models/exercise';
import { ExerciseService } from '../services/exercise-service';
import { EditModeService } from '../services/edit-mode-service';

@Component({
  selector: 'app-show-exercise',
  imports: [],
  templateUrl: './show-exercise.html',
  styleUrl: './show-exercise.css',
})
export class ShowExercise {
  protected readonly title = signal('gym-app');
  exerciseToEdit: Exercise = new Exercise();

  constructor(public exerciseService: ExerciseService, public editModeService: EditModeService) {}


  insertExercise() {
    this.editModeService.editMode = true;
  }

  editExercise(exercise: Exercise) {
    this.editModeService.editMode = true;
    this.exerciseToEdit = exercise;
  }

  deleteExercise(id: number) {
    console.log('Elimina esercizio con id:', id);
    const confirmed = confirm(`Sei sicuro di voler eliminare questo esercizio? 🗑️`);
    if (confirmed) {
      this.exerciseService.exercises = this.exerciseService.exercises.filter(ex => ex.id !== id);
      alert('Esercizio eliminato!');
      localStorage.setItem('exercises', JSON.stringify(this.exerciseService.exercises));
    }
  }
}
