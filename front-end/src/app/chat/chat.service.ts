import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Message } from '../user-show/message'

@Injectable()
export class ChatService {

  constructor(private _http:Http ) { }

  createMessage(recieverId,message:Message){
    
      console.log("recieverId",recieverId)
        return this._http.post("/api/chats/new/"+recieverId+"/",message)
        .map(data => data.json()).toPromise()
      
      }

}
