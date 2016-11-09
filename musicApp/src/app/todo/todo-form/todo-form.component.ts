import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ma-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})

export class TodoFormComponent {
  @Output() itemCreated: EventEmitter<string> = new EventEmitter<string>();
  text: string;

  constructor() { }

  onSubmit() {
    this.itemCreated.emit(this.text);
    this.text = "";
  }
}