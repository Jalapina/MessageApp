import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MessageService } from './message.service'
import { Message } from './message'
  
@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})

export class UserShowComponent implements OnInit {
  
  public chatId = this._router.snapshot.params['id'];
  public userId;
  public sendee = JSON.parse(localStorage.getItem('loggedUser'))._id
  public message = new Message()
  
  loggedUser;

  constructor(private _router: ActivatedRoute, private _messageService:MessageService) { 
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    this.messages;
  }

  messages: Message[] = [];
  
  ngOnInit() {

    let id = this._router.snapshot.params['id']
    this.userId = id
    this.getMessages();

  }

  getMessages(){

    const id  = this
    
    this._messageService.getMessages(id)
    .then( messages => this.messages = messages )
    .catch( err => console.log(err));

  } 

  createMessage(message){
    // this.message.reciever = this.reciever
    this.message.sender = this.sendee
    // console.log(this.message);
    
    this._messageService.createMessage(this.message)
    .then(status => this.getMessages())
    .catch(err => console.log(err));

  }

  createReply(message){
    
    const id = this

    this._messageService.createReply(id,this.message)
    .then(status => this.getMessages())
    .catch(err => console.log(err));

  }

}
