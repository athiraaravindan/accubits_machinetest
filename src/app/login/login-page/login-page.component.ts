import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { FormsModule, FormBuilder, ReactiveFormsModule,Validators } from '@angular/forms';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  data:any
  value:boolean = false
  email: any
  password:any

  // error:boolean = false
  // loginForm = this.formBuilder.group({
  //   name: ['', Validators.required ],
  //   password: ['', Validators.required ]
  // });

  constructor(
    // private formBuilder: FormBuilder,
    private route:Router
    ) { }

  ngOnInit() {
  }
  submit(): void {
   console.log(this.email,this.password)
   if(this.email !== '' && this.password !== ''){

     this.route.navigate(['home'])
   }
   
     
  }
  getpassword(value:any){
    console.log(value)
    this.password = value
  }
  
  getemail(value:any){
    this.email = value
    console.log(value)
  }

}

