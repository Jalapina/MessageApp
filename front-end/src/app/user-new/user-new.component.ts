import { UserService } from './user.service'
import { Component, OnInit, Input } from '@angular/core';
import { User } from './user'
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
})

export class UserNewComponent implements OnInit {
  users = [];
  loggedUser = User
  user__;

  private _user: any = {};
  constructor( private _userService:UserService, private _router:Router) {
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));    
   }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this._userService.getUsers()
    .then( users => this.users = users)
    .catch(err => console.log(err));
  }

  create(user:User){
    this._userService.create(user)
    .then( status => this.getUsers() )
    .catch(err => console.log(err));
  }

  login(_user:any){
    console.log('login() ***',_user)
    this._userService.login(_user)
    .then(response => {this._router.navigateByUrl('/home');})
    .catch( err => console.log(err));
  }

  logout(){
    localStorage.removeItem('loggedUser');
  }

}
