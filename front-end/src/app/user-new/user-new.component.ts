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
  message

  private _user: any = {};
  constructor( private _userService:UserService, private _router:Router) {
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));    
   }

  ngOnInit() {
  }

  create(user:User){
    console.log("create Service",user)
    this._userService.create(user)
    .then( status => {this._router.navigateByUrl('/home')} )
    .catch(err => console.log(err))    
  }

  login(_user:any){
    console.log('login() ***',_user)
    this._userService.login(_user)
    .then(response => {this._router.navigateByUrl('/home');})
    .catch( err => this.message = err)
    .then(function(message){
      console.log(message)
    })
  }

  logout(){
    localStorage.removeItem('loggedUser');
  }

}
