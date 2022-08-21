import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../../shared/interfaces/todo-item';

@Component({
  selector: 'todo-item',
  template: `
    <div>
      <input type="checkbox" [checked]="todo?.isComplete" />
      <span>{{ todo?.title }}</span>
      <button (click)="remove()">Delete</button>
    </div>
  `,
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() todo: TodoItem | undefined;
  @Output() removeItem = new EventEmitter<void>();

  remove() {
    this.removeItem.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
