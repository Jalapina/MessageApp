import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Message } from '../user-show/message'

@Injectable()
export class ChatService {

  constructor(private _http:Http ) { }

  createMessage(message:Message){
    
        return this._http.post("/api/chats/new/",message)
        .map(data => data.json()).toPromise()
      
      }

}
