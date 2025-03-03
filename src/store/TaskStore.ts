import { makeAutoObservable, runInAction } from "mobx";
import Task from "../models/Task";

class TaskStore {
  tasks: Task[] = [];

  constructor() {
    makeAutoObservable(this);
  }
  addTask(title: string) {
    runInAction(() => {
      const newTask = new Task(title, null);
      this.tasks.push(newTask);
    });
  }
  get allTasksCompleted() {
    return this.tasks.every((task) => task.completed);
  }
}
const taskStore = new TaskStore();
export default taskStore;
