import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './toolbar.component.html',
 
})
export class ToolbarComponent {

  @Input()  isLoginBtnShown!: boolean;
  @Input()  isRegisterBtnShown!: boolean;
  @Input()  isLogoutBtnShown!: boolean;

  firstEmailLetters = localStorage.getItem('email');
  LogOut = () => localStorage.removeItem('email');
}
