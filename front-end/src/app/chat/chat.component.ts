import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Message } from '../user-show/message';
import { ChatService } from './chat.service'
import { MessageService } from '../user-show/message.service'
import { Router } from '@angular/router'
// import { Response } from '@angular/http/src/static_response';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public id = this._params.snapshot.params['id'];  
  public message = new Message() 
  public messages: Message[] = [];  
  public sender = JSON.parse(localStorage.getItem('loggedUser'))._id  
  // private route;

  constructor( private _chatService:ChatService,private _params: ActivatedRoute, private _router:Router,private _messageService:MessageService) { }

  ngOnInit() {
    this.getMessages();    
  }

  getMessages(){
    console.log(this.id)
    const id  = this;
    this._messageService.getMessages(id)
    .then( messages => this.messages = messages )
    .then(function(messages){
      console.log(messages)
    })
    .catch( err => console.log(err));

  }   

  createReply(){
    
    const id = this;
    this.message.sender = this.sender;
          
    this._messageService.createReply(id,this.message)
    .then(status => this.getMessages())
    .catch(err => console.log(err));

  }

}
