import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
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
  public sender = JSON.parse(localStorage.getItem('loggedUser'))._id  
  public recieverId = this._param.snapshot.params['id'];  

  constructor( private _chatService:ChatService, private _router:Router, private _param:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.sender)
  }

  createMessage(message){
    // this.message.reciever = this.reciever
    // this.message.sender = this.sender
    console.log(this.message);
    
    this._chatService.createMessage(this.recieverId,this.message)
    .then(message => this.message = message)
    .then(function(Response){
      console.log("R E S P O N S E",Response)
    })
    .then(status => {this._router.navigateByUrl('/show/'+404+'/');})
    .catch(err => console.log(err));

  }
}
