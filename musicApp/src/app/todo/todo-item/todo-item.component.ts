import { Component, Input , Output, EventEmitter} from '@angular/core';
import { ITodo } from '../todo-model';

@Component({
    selector: 'ma-todo-item',
    templateUrl: './todo-item.component.html'
})

export class TodoItemComponent {
   @Input() item: ITodo;
   @Output() toggleCompleted: EventEmitter<boolean> = new EventEmitter<boolean>();
   @Output() deletedId: EventEmitter<string> = new EventEmitter<string>();

   toggleComplete() {
    this.toggleCompleted.emit(!this.item.completed);
   }

   onDelete($event: MouseEvent, id:string)
   {
       this.deletedId.emit(id);
       $event.stopPropagation();
   }
}