export interface ITask
{
    completed: boolean;
    withpriority: boolean;
    title: string;
    deadline?: Date;
}

export const TASKS:ITask[]=[
  { completed: false, withpriority: false, title: "Hit the gym", deadline: new Date('01/04/2023') },
  { completed: true, withpriority: true, title: "Pay bills" },
  { completed: false, withpriority: false, title: "Meet John" },
  { completed: false, withpriority: true, title: "Buy eggs", deadline: new Date('29/03/2023') },
  { completed: true, withpriority: false, title: "Read a book" },
  { completed: false, withpriority: false, title: "Organize office" },
  { completed: false, withpriority: false, title: "Eat dinner"},
  { completed: false, withpriority: true, title: "Buy apples", deadline: new Date('05/03/2023') },
  { completed: false, withpriority: true, title: "Meet George"},
  { completed: false, withpriority: false, title: "Feed the cat" },
  { completed: true, withpriority: false, title: "Write a letter"}
]