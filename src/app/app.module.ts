import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {LoginModule} from './login/login.module'
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import {HomeModule} from './home/home.module'



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    HomeModule,

    AppRoutingModule,HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
