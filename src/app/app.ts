import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exercise } from './models/exercise';
import { FormsModule } from '@angular/forms';
import { HeroSection } from './hero-section/hero-section';
import { FormModifyCreation } from './form-modify-creation/form-modify-creation';
import { ShowExercise } from './show-exercise/show-exercise';
import { EditModeService } from './services/edit-mode-service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, HeroSection, FormModifyCreation, ShowExercise],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gym-app');
  exerciseToEdit: Exercise = new Exercise();
 constructor(public editModeService: EditModeService) {}
  
}
