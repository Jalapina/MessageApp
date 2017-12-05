import { UserService } from './user-new/user.service';
import { MessageService } from './user-show/message.service'
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

@NgModule({
  
  declarations: [
    AppComponent,
    UserNewComponent,
    UserCreateComponent,
    LandingComponent,
    UserLoginComponent,
    UserShowComponent,
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
  ],

  bootstrap: [AppComponent]

})

export class AppModule { }
