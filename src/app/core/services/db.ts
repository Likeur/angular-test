import Dexie, { Table } from "dexie";
import { User } from "../models/user.model";
import { Todo } from "../models/todo.model";

export class AngularTodoDB extends Dexie{
    users!: Table<User, string>
    todos!: Table<Todo, string>

    constructor(){
        super('AngularTodoDB');
        this.version(2).stores({
            users: 'email, password',
            todos: '++id, title, description, done'
        })
    }
} 