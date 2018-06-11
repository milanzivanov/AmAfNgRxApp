import { Exercise } from './exercise.model';
import { Subject } from 'rxjs';

export class TrainingService {
  exerciseChanged = new Subject<Exercise>();
  private availableExercise: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
  ];

  private runingExercise; Exercise;
  private exercises: Exercise[] = [];

  getAvailableExercise() {
    return this.availableExercise.slice();
  }

  startExercise(seletedId: string) {
    this.runingExercise = this.availableExercise.find(ex => ex.id === seletedId);
    this.exerciseChanged.next({...this.runingExercise });
  }

  compliteExercise() {
    this.exercises.push({...this.runingExercise,
                            date: new Date(),
                            state: 'complited'
                        });
    this.runingExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.exercises.push({...this.runingExercise,
                            duration: this.runingExercise.duration * (progress / 100),
                            calories: this.runingExercise.calories * (progress / 100),
                            date: new Date(),
                            state: 'cancelled'
                        });
    this.runingExercise = null;
    this.exerciseChanged.next(null);
  }

  getRuningExercise() {
    return { ...this.runingExercise };
  }

  getCompletedOrCancelledExercises() {
    return this.exercises.slice();
  }


}

