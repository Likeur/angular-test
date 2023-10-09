import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../shared/toolbar/toolbar.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, AddTodoComponent, TodoListComponent],
  templateUrl: './todo.component.html',
 
})
export default class TodoComponent {}
