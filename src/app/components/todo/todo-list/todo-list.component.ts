import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/core/models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styles:[`
      .done{
        text-decoration: line-through;
      }
  `]
})
export class TodoListComponent {

  private ts = inject(TodoService);
  readonly todos$ = this.ts.getTodos();

  updateTodo(todo : Todo){
    todo.done = !todo.done;
    this.ts.updateTodo(todo);
  }

  deleteTodo(todo: Todo){
    this.ts.deleteTodo(todo);
  }
}
