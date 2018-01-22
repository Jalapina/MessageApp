import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MessageService } from './message.service'
import { ChatService } from '../chat/chat.service'
import { Router } from '@angular/router'
import { Message } from './message'

  
@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css'],
})

export class UserShowComponent implements OnInit {
  
  // public userId;
  public sender = JSON.parse(localStorage.getItem('loggedUser'))._id
  public recieverId = this._params.snapshot.params['id'];  
  
  public message = new Message()  
  
  loggedUser;

  constructor(private _params: ActivatedRoute,private _router:Router, private _messageService:MessageService,private _chatService:ChatService) { 
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
  }

  ngOnInit() {
  }

  createMessage(message){
    
        this.message.sender = this.sender
        console.log(this.message);
        
        this._chatService.createMessage(this.recieverId,this.message)
        .then(message => this.message = message)
        .then(response => {this._router.navigateByUrl('chats/'+response.chatId._id);})
        .catch(err => console.log(err));
    
  }

}
