import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  // styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  _user = {}
  // @Output() 
  @Output() loginUserEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  login(){
    console.log('*******',this._user,'*********')
    this.loginUserEvent.emit(this._user);
  }

}
