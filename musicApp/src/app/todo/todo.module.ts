import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';

import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from './todo.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [  //lista innych modulów, które exportują nasze dodatkowe rzeczy
    FormsModule,
    CommonModule,
    HttpModule
  ],
  providers: [ // lista usług dostęnych w podule 
    TodoService
  ]
   , 
  declarations: [ // //lista komponentow, derektyw, pipes, które modul udostępnia w wew. 
    TodoFormComponent,
    TodoItemComponent,
    TodoComponent
    ],
    exports: [ //lista komponentow, derektyw, pipes, które modul udostępnia na zew.
      TodoComponent
    ]
})
export class TodoModule { }
