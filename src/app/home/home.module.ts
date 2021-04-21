import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { HeadComponent } from './head/head.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
const homeRouting: Routes = [
  { path: 'home',  component: HomePageComponent },

]
export const homeRoute = RouterModule.forChild(homeRouting);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    homeRoute
  ],
  declarations: [HomePageComponent, NavLinkComponent, HeadComponent, SecondComponent, ThirdComponent, FourthComponent]
})
export class HomeModule { }
