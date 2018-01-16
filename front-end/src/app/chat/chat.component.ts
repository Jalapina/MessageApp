import { Component, OnInit } from '@angular/core';
import { Message } from '../user-show/message';
import { ChatService } from './chat.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public message = new Message()  

  constructor( private _chatService:ChatService, private _router:Router) { }

  ngOnInit() {
  }

  createMessage(message){
    // this.message.reciever = this.reciever
    // this.message.sender = this.sendee
    // console.log(this.message);
    
    this._chatService.createMessage(this.message)
    .then(status => {this._router.navigateByUrl('/home');})
    .catch(err => console.log(err));

  }
}
