import { Exercise } from "./exercise";

export class Workout {
    id: number = 0;
    name: string = '';
    dateCreation: Date = new Date();
    exercises: Exercise[] = [];
}