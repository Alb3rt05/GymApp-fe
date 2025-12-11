import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditModeService {
  editMode: boolean = false;
}
