import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/core/models/todo.model';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-todo.component.html',
  
})
export class AddTodoComponent {

  private ts = inject(TodoService)

  addTodoForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('')
  })

  onSubmit(){
    const todo :Todo = {
      title: this.addTodoForm.value.title!,
      description: this.addTodoForm.value.description!,
      done: false,
    }

    this.ts.newTodo(todo);
    this.addTodoForm.reset();
  }

}
