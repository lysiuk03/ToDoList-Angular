import { Component,Output,EventEmitter} from '@angular/core';
import { ITask } from './task.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input()
  task:ITask={
    completed: true,
    withpriority: true,
    title: "string"
  };
  @Input() index: number = 0;
  onTaskClick(): void {
    this.task.completed = !this.task.completed;
  }
  isEven(index: number): boolean {
    return index % 2 === 0;
  }
  @Output() remove: EventEmitter<void> = new EventEmitter<void>();

  removeTask(): void {
    this.remove.emit();
  }
}
