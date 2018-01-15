import { UserService } from './user-new/user.service';
import { MessageService } from './user-show/message.service';
import { ChatService } from './chat/chat.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.modules';
import { AppComponent } from './app.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserCreateComponent } from './user-new/user-create/user-create.component';
import { LandingComponent } from './landing/landing.component';
import { UserLoginComponent } from './user-new/user-login/user-login.component';
import { UserShowComponent } from './user-show/user-show.component';
import { ChatComponent } from '../app/chat/chat.component';
import { from } from 'rxjs/observable/from';

@NgModule({
  
  declarations: [
    AppComponent,
    UserNewComponent,
    UserCreateComponent,
    LandingComponent,
    UserLoginComponent,
    UserShowComponent,
    ChatComponent,
  ],

  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, 
  ],

  providers: [
    UserService,
    MessageService,
    ChatService,
  ],

  bootstrap: [AppComponent]

})

export class AppModule { }
