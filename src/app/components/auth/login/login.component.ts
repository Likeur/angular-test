import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';
import { FormGroup, ReactiveFormsModule,FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ToolbarComponent,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  
})
export default class LoginComponent {

  showError = false;
  errorMsg  = "email ou password incorrect, veuillez vous inscrire"
  private ts = inject(TodoService);
  private router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  async onSubmit(){
    const email = this.loginForm.value.email!;
    const password = this.loginForm.value.password!;

    const user = await this.ts.loggIn(email);
    if(user?.email === email && user.password === password){
      localStorage.setItem('email', email);
      this.router.navigateByUrl('/todos');
    }else{
      this.showError = true;
    }
  }


}
