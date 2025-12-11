import { Component, signal } from '@angular/core';
import { Exercise } from '../models/exercise';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ExerciseService } from '../services/exercise-service';
import { EditModeService } from '../services/edit-mode-service';

@Component({
  selector: 'app-form-modify-creation',
  imports: [FormsModule],
  templateUrl: './form-modify-creation.html',
  styleUrl: './form-modify-creation.css',
})
export class FormModifyCreation {
  protected readonly title = signal('gym-app');
  exerciseToEdit: Exercise = new Exercise();
   
  constructor(public exerciseService: ExerciseService, public editModeService: EditModeService) {}

   saveExercise() {
    if (!this.exerciseToEdit.name || this.exerciseToEdit.name.trim() === '') {
      alert('Il nome dell\'esercizio è obbligatorio! ⚠️');
      return;
    }
    if (this.exerciseToEdit.id === 0) {
      // assegno ID progressivo
      this.exerciseToEdit.id = this.exerciseService.exercises.length + 1;
      // inserisco l'esercizio nell'array
      this.exerciseService.exercises.push(this.exerciseToEdit);
    }
    console.log('Esercizio salvato:', this.exerciseToEdit);
    // torno alla modalità visualizzazione (elenco)
    this.editModeService.editMode = false;
    // resetto l'esercizio in modifica
    this.exerciseToEdit = new Exercise();
  }

  cancelEdit() {
    this.editModeService.editMode = false;
    this.exerciseToEdit = new Exercise();
  }
}
