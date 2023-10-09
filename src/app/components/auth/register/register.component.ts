import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ToolbarComponent,ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
 
})
export default class RegisterComponent {
  private ts = inject(TodoService);
  private router = inject(Router);

  registerForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email])
  })

  async onSubmit(){
    const email = this.registerForm.value.Email!;
    const password = this.registerForm.value.password!;
    const user: User = {
      email: email, password: password 
    }
    localStorage.setItem('email', user.email);
    await this.ts.newUser(user);
    this.router.navigateByUrl('.todos');
  }

}
