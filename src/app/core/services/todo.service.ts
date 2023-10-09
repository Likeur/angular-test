import { Injectable, inject } from '@angular/core';
import { AngularTodoDB } from './db';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Todo } from '../models/todo.model';
import { liveQuery } from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  db = new AngularTodoDB();
  private router = inject(Router);

  //operations sur l'authentificaation de l'utilisateur
  loggIn = (email: string) => this.db.users.get(email);
  newUser = (user: User) => this.db.users.add(user)
  getUsers = () => this.db.users.toArray();

  //permet de verifier si l'utilisateur est connecté ou pas 
  isLoggedIn = () => {
    if (localStorage.getItem('email')){
      return true
    }else{
      this.router.navigate(['login']);
      return false
    }
  };

  //crud
  newTodo = (todo: Todo)=> this.db.todos.add(todo);
  getTodos = () => liveQuery(()=>this.db.todos.toArray());
  updateTodo = (todo: Todo) =>this.db.todos.update(todo.id!, todo);
  deleteTodo = (todo: Todo)=> this.db.todos.delete(todo.id!);
}
