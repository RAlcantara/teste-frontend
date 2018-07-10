import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskItemComponent } from '../task-item/task-item.component';
import { MatDialog, MatDialogConfig } from '@angular/material';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {

   public url: string;
   public object;
   // public courses: Array<string>;

  constructor( private http: HttpClient, private dialog: MatDialog) { 
 
  }

  ngOnInit(): void {
      this.http.get('https://git.sebraemg.com.br/publico/test-frontend/raw/master/api/courses.json').subscribe(data => this.object = data
      );
   }

   showDialog(task?): void {
      const config: MatDialogConfig<any> = (task) ? {data: { task }} : null;
      this.dialog.open(TaskItemComponent, config);
   }

}
