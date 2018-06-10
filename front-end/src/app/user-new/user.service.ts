import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { User } from './user'

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  getMessages(){
    return this._http.get('/api/messages')
    .map(data => data.json()).toPromise();
  }
  
  create(user:User){
    console.log("create Service",user)
    
    return this._http.post('/api/users', user)
    .map(data =>data.json()).toPromise()
    // .catch(error => Observable.throw(error));
  }

  login(_user:any){

    console.log('LOGIN SERVICE',_user)
    return this._http.post('/api/users/authenticate', _user)
    .map(data => {
      
            let logged = data.json()
      
            localStorage.setItem('loggedUser', JSON.stringify(logged));
      
            return logged
      
    }).toPromise();
  }
    
  getUsers(){
    return this._http.get('/api/users')
    .map(data => data.json()).toPromise();
  }
}
