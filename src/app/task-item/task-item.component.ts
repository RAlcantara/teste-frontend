import { Component, OnInit, Inject } from '@angular/core';
import { Task } from '../models/task.model';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {


   public dialogTitle;
   public task;
   
   constructor(
      @Inject(MAT_DIALOG_DATA) private data: any,
    ) { }

  ngOnInit(): void {
   this.dialogTitle = "Curso";
     this.task = this.data.task;
   }

}


