import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginModule} from './login/login.module'
import {HomeModule} from './home/home.module'

const routes: Routes = [
  { path: 'login', component: LoginModule },
  { path: 'home' ,component:HomeModule},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
