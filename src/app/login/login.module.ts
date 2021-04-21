import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { PasswordComponent } from './password/password.component';
const loginRouting: Routes = [
  { path: '',  component: LoginPageComponent }
]
export const loginroute = RouterModule.forChild(loginRouting);
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
        ReactiveFormsModule,
        loginroute
  ],
  declarations: [LoginPageComponent, EmailComponent, PasswordComponent],
  exports:[LoginPageComponent]
})
export class LoginModule { }

