import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../shared/interfaces/todo-item';
import { TodoService } from '../../shared/services/todo.service';

@Component({
  selector: 'todo-container',
  template: `
    <todo-form (addItem)="addItem($event)"></todo-form>
    <todo-list [todos]="todos" (remove)="remove($event)"></todo-list>
  `,
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  todos: TodoItem[] = [];

  addItem(title: string) {
    this.todoService.add({
      title: title,
      isComplete: false,
    });
  }

  remove(i: number) {
    this.todoService.remove(i);
  }

  constructor(private todoService: TodoService) {
    this.todos = todoService.todos;
  }

  ngOnInit(): void {}
}
