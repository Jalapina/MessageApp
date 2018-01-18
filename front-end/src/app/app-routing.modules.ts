import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserShowComponent } from './user-show/user-show.component'
import { ChatComponent } from './chat/chat.component'
 
const routes: Routes = [
  
    { 
      path: '', 
      pathMatch: 'full', 
      component: UserNewComponent 
    },
  
    { 
      path: 'home', 
      pathMatch: 'full',
      component: LandingComponent 
    },
    
    {
      path: 'show/:id',
      pathMatch: 'full',
      component: UserShowComponent
    },

    {
      path: 'users/:id',
      pathMatch: 'full',
      component: ChatComponent,
    },
    
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
