import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../../shared/interfaces/todo-item';

@Component({
  selector: 'todo-list',
  template: `<div *ngIf="todos.length; else noData">
      <todo-item
        *ngFor="let todo of todos; index as i"
        [todo]="todo"
        (removeItem)="removeItem(i)"
      ></todo-item>
    </div>

    <ng-template #noData>
      <p><i>no todos...</i></p>
    </ng-template> `,
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() todos: TodoItem[] = [];
  @Output() remove = new EventEmitter<number>();

  removeItem(i: number) {
    this.remove.emit(i);
  }
  constructor() {}

  ngOnInit(): void {}
}
