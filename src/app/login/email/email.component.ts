import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  @Output() emailEmiat = new EventEmitter<any>();

  
  constructor() { }

  ngOnInit(): void {
  }
  emailChange(event: any){
    console.log(event.target.value,'gettttt')
    this.emailEmiat.emit(event.target.value);


  }
 

}
