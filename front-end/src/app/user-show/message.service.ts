import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Message } from './message'
import "rxjs";

@Injectable()
export class MessageService {

  constructor( private _http:Http ) { }

  getMessages({sendee,reciever}){
    // console.log("Calling getMessages service",{sender,reciever})
    // console.log("/api/messages/"+sender+"/"+reciever)
    return this._http.get("/api/chats/"+sendee+"/")
    .map( data => data.json()).toPromise();
  }
  
  createMessage(message:Message){
    return this._http.post("/api/chats/new/",message)
    .map(data => data.json()).toPromise()
  }

  getChat(){
    return this._http.get("/api/chats/")
    .map(data => data.json()).toPromise()
  }

}
