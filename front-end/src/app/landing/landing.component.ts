import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../user-new/user.service'
import { MessageService } from '../user-show/message.service'
import { User } from '../user-new/user'
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

  loggedUser = User
  users = [];
  chats = []

  constructor( private _userService:UserService, private _messagePrivate:MessageService, private _router:Router) {
  
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
   
  }

  ngOnInit() {
    this.getUsers()
    this.getChat()
  }

  getUsers(){
    this._userService.getUsers()
    .then(users => this.users = users)
    .catch(err => console.log(err));
    
  }
  getChat(){

    // console.log("getChat component is working!")
    this._messagePrivate.getChat()
    .then( chats => this.chats = chats )
    .catch(err => console.log(err));

  }

  logOut(){
    
  localStorage.clear()
  
  this._router.navigate(['/']).then(nav => {
    console.log(nav); // true if navigation is successful
  }, err => {
    console.log(err) // when there's an error
  });  
    
  }

}
