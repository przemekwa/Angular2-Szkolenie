import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';

import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from './todo.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpModule
  ],
  providers: [
    TodoService
  ]
   , 
  declarations: [
    TodoFormComponent,
    TodoItemComponent,
    TodoComponent
    ],
    exports: [
      TodoComponent
    ]
})
export class TodoModule { }
