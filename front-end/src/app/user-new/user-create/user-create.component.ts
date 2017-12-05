import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user = new User();

  @Output() createUserEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  create(){
    this.createUserEvent.emit(this.user);
    this.user = new User();
  }

}
