import { makeAutoObservable, runInAction } from "mobx";

class Task {
  id: string = Math.random().toString(36).substring(2, 15);
  title: string;
  completed: boolean;
  subtasks: Task[] = [];
  parent: Task | null;

  constructor(title: string, parent: Task | null) {
    this.title = title;
    this.completed = false;
    this.parent = parent;
    makeAutoObservable(this);
  }
  toggleCompleted() {
    runInAction(() => {
      this.completed = !this.completed;
      this.updateSubtasksCompletion(this.completed);
    });
  }
  addSubtasks(title: string) {
    runInAction(() => {
      const newTask = new Task(title, this);
      this.subtasks.push(newTask);
    });
  }

  updateSubtasksCompletion(completed: boolean) {
    runInAction(() => {
      this.subtasks.forEach((subtask) => {
        subtask.completed = completed;
        subtask.updateSubtasksCompletion(completed);
      });
    });
  }

  get allSubtasksCompleted(): boolean {
    return this.subtasks.every((subtask) => subtask.completed);
  }
}

export default Task;
