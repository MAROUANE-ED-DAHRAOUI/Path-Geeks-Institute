import { TodoList } from "./todo.js";

const malist = new TodoList();
malist.addTasks("Complet exercices_XP");
malist.addTasks("today courses is good");
malist.addTasks("cours is completed");
malist.markTasksAsCompleted(0);
malist.markTasksAsCompleted(2);
malist.listAllTasks();
