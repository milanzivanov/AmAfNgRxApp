import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

import { StoptrainingComponent } from './stop-training.component';
import { TrainingService } from './../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  @Output() trainingExit = new EventEmitter();
  progress = 0;
  timer: number;


  constructor(private dialog: MatDialog,
              private trainingService: TrainingService) { }

  ngOnInit() {
    this.startOnResumeTimer();
  }

  startOnResumeTimer() {
    const step = this.trainingService.getRuningExercise().duration / 100 * 1000;
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, step);
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StoptrainingComponent, {
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
      if (result) {
        this.trainingExit.emit();
      } else {
        this.startOnResumeTimer();
      }
    });
  }

}
