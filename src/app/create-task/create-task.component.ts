import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ITask } from '../task/task.model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  creationForm=this.fb.group({
    completed: [false],
    withpriority: [false],
    title: ['', Validators.minLength(1)],
    deadline: [null]
  });

  @Output() createEvent=new EventEmitter<ITask>();

  constructor(private fb: FormBuilder){

  }
onSubmit(event:any):void{
  if(!this.creationForm.valid)
  {
    alert("Invalid data!");
    return;
  }
  const task =this.creationForm.value as ITask;
  this.createEvent.emit(task);
}
}
