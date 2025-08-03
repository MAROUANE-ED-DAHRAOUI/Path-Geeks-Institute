export class TodoList {
  constructor() {
    this.tasks = [];
  }
  addTasks(task) {
    const newtask = {
      task: task,
      completed: false,
    };
    this.tasks.push(newtask);
  }
  markTasksAsCompleted(index) {
    if (this.tasks[index]) {
      this.tasks[index].completed = true;
    } else {
      console.log("Task not found");
    }
  }
  listAllTasks() {
    this.tasks.forEach((task, index) => {
      const status = task.completed ? "Completed" : "Not completed";
      console.log(`${index + 1}. ${task.task} - ${status}`);
    });
  }
}