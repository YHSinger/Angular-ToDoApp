import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: TodoItem[] = [
    { title: 'first-task', isComplete: true },
    { title: 'second-task', isComplete: false },
  ];

  add(todo: TodoItem) {
    this.todos.push(todo);
  }

  remove(i: number) {
    this.todos.splice(i, 1);
  }

  getTodos() {
    return this.todos;
  }

  constructor() {}
}
