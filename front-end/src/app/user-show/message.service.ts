import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Message } from './message'
import "rxjs" 

@Injectable()
export class MessageService {

  constructor( private _http:Http ) { }

  getMessages(id){
    
    // console.log("Calling getMessages service",id.chatId)
    const chatId = id.chatId
    return this._http.get("/api/chats/"+chatId+"/")
    .map( data => data.json()).toPromise();

  }

  getChat(user){
    var userId = user._id
    console.log("getChat service is working!",userId)
    return this._http.get("/api/getchats/"+userId,"/")
    .map(data => data.json()).toPromise()

  }

  createReply(id,message){

    const chatId = id.chatId
    console.log("CHATID Service",chatId,'\n',message);
    return this._http.post('/api/chats/reply/'+chatId,message)
    .map(data => data.json()).toPromise()

  }

}
