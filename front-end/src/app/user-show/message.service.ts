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
    return this._http.get("/api/messages/"+sendee+"/"+reciever)
    .map( data => data.json()).toPromise();
  }
  
  createMessage(message:Message){
    return this._http.post("/api/messages/create",message)
    .map(data => data.json()).toPromise()
  }

}
