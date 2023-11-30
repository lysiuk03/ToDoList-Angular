import { Component } from '@angular/core';
import { TASKS ,ITask } from '../task/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: ITask[] = TASKS;

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}