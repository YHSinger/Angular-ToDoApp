import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-form',
  template: ` <input
      #title
      [value]="form.title"
      (input)="inputChanged(title.value)"
      type="text"
    />
    <button (click)="add()">Add</button>`,
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() addItem = new EventEmitter<string>();

  form = {
    title: '',
  };

  inputChanged(e: string) {
    this.form.title = e;
  }

  add() {
    this.addItem.emit(this.form.title);
    this.form.title = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
