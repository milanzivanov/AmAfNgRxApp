import { Exercese } from './exercise.model';
import { Subject } from 'rxjs';

export class TrainingService {
  exerciseChanged = new Subject<Exercese>();
  private availableExercise: Exercese[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-tose', name: 'Touch Toes', duration: 160, calories: 18 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 130, calories: 88 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 99 },
  ];

  private runingExercise; Exercese;

  getAvailableExercise() {
    return this.availableExercise.slice();
  }

  startExercise(seletedId: string) {
    this.runingExercise = this.availableExercise.find(ex => ex.id === seletedId);
    this.exerciseChanged.next({...this.runingExercise });
  }


}

