import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginSuccessfullyComponent } from './login-successfully/login-successfully.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  {
    path: 'signin',
    component: LoginComponent,
  },
  {
    path: 'LoginSuccess',
    component: LoginSuccessfullyComponent,
  },
  { path: 'register', component: RegisterSuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
