import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  @Output() passwordEmait = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  passwordChange(event: any){
    console.log(event.target.value,'gettttt')
    this.passwordEmait.emit(event.target.value);

  }

}
