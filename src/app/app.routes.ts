import { Routes } from '@angular/router';
import { TodoService } from './core/services/todo.service';
import { inject } from '@angular/core';

export const routes: Routes = [
    {
        path: 'login',
        title: 'Login | todoApp',
        loadComponent: () => import ('./components/auth/login/login.component'),
    },
    {
        path: 'register',
        title: 'Register | todoApp',
        loadComponent: () => import ('./components/auth/register/register.component'),
    },
    {
        path: 'todos',
        title: 'Todos | todoApp',
        canActivate: [()=> inject(TodoService).isLoggedIn()],
        loadComponent: () => import ('./components/todo/todo.component'),
    },
    {
        path: '',
        redirectTo: 'todos',
        pathMatch : 'full'
    },
    {
        path: '**',
        redirectTo: 'todos',
        pathMatch: 'full'
    }
];
