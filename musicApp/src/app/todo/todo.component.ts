import { Component } from "@angular/core";
import { TodoService } from "./todo.service";

import { ITodo } from './todo-model';

@Component({
    selector: 'ma-todo',
    templateUrl: './todo.component.html'

})

export class TodoComponent {
    todosCompleted: number;
    todos: ITodo[] = [];
    todoService: TodoService;

    constructor(todoService: TodoService) {
        this.todoService = todoService;
        this.todos = todoService.todos;
        this.todoService.itemsChange.subscribe(todos => {
        this.todos = todos;
        this.todosCompleted = this.todos.filter(todo => todo.completed).length;
    });
    }

    ToggleTodoCompleted(status: boolean, todo) {
        this.todoService.ToggleTodoCompleted(status, todo);
        this.todosCompleted = this.todos.filter(todo => todo.completed).length;
    }

    CreateItem(text: string) {
        this.todoService.CreateItem(text);
    }

    DeletedItem(id: number) {
        this.todoService.DeleteItem(id);
    }
}