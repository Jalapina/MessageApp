import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-new/user.service'
import { MessageService } from '../user-show/message.service'
import { User } from '../user-new/user'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

  loggedUser = User
  users = [];
  chats = []

  constructor( private _userService:UserService, private _messagePrivate:MessageService ) {
  
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

}
