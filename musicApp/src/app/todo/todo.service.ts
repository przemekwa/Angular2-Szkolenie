import { Injectable, EventEmitter } from "@angular/core";
 import { Http } from '@angular/http';
import { ITodo } from './todo-model';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
    private apiUrl = "http://localhost:3000/todos";
    itemsChange: EventEmitter<ITodo[]> = new EventEmitter<ITodo[]>();
    todos: ITodo[] = [];

    constructor(private http: Http) {
        this.http.get(this.apiUrl)
            .map(response => response.json())
            .subscribe(response => {
                this.todos = response;
                this.itemsChange.emit(this.todos);
            });
    }

    CreateItem(text: string) {
        const newId = Math.floor(Math.random() * 100000);
        const newItem = { id: newId, text: text, completed: false }

        this.todos.push(newItem);
        this.itemsChange.emit(this.todos);

        this.http.post(this.apiUrl, newItem)
            .subscribe(() => {
                console.log("PostApi " + newId);
            }, error => console.log(error));
    }

    Remove(id: number) {
        console.log("Usuniecie " + id);
        this.todos = this.todos.filter(t => t.id != id);
        this.itemsChange.emit(this.todos);
    }

    DeleteItem(id: number) {
        this.Remove(id);
        this.http.delete(`${this.apiUrl}/${id}`).subscribe(()=>{console.log("DeleteApi");
        });
    }

    Update(todo: ITodo) {
        this.http.put(`${this.apiUrl}/${todo.id}`, todo).subscribe(()=>{console.log("PutApi "+ todo.id);
        });
    }

    ToggleTodoCompleted(status: boolean, todo) {
        this.todos.forEach(element => {
            if (element.id === todo.id) {
                element.completed = status;
            }
        });

        this.Update(todo);

        this.itemsChange.emit(this.todos);
    }
}