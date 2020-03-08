import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './view/container/register/register.component';
import { LoginComponent } from './view/container/login/login.component';
import { ForgotPasswordComponent } from './view/container/forgot-password';
import { SignComponent } from './view/container/sign/sign.component';

const AuthRoutes: Routes = [
  { path: '', component: SignComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'login', component: SignComponent }
];

@NgModule({
  imports: [RouterModule.forChild(AuthRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
