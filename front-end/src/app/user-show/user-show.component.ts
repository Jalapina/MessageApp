import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MessageService } from './message.service'
import { Message } from './message'
  
@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css'],
})

export class UserShowComponent implements OnInit {
  
  public chatId = this._router.snapshot.params['id'];
  // public userId;
  public sender = JSON.parse(localStorage.getItem('loggedUser'))._id
  public message = new Message()  
  
  loggedUser;

  constructor(private _router: ActivatedRoute, private _messageService:MessageService) { 
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
  }

  public messages: Message[] = [];
  
  ngOnInit() {

  this.getMessages();

  }

  getMessages(){

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
