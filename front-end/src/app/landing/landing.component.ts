import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-new/user.service'
import { User } from '../user-new/user'
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  loggedUser = User
  users: User[] = [];
  constructor( private _userService:UserService ) {
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
   }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(){
    this._userService.getUsers()
    .then(users => this.users = users )
    .catch(err => console.log(err));
  }

}
