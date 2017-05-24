import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { CreateFriendComponent } from './friends/create-friend/create-friend.component';
import { InspectFriendComponent } from './friends/inspect-friend/inspect-friend.component';
import { EditFriendComponent } from './friends/edit-friend/edit-friend.component';
import { FriendsService } from "./friends/friends.service";
import { UserLoginComponent } from './user-login/user-login.component';
import { LoginComponent } from './user-login/login/login.component';
import { RegisterComponent } from './user-login/register/register.component';
import { UserCrudComponent } from './user-login/user-crud/user-crud.component';
import { UserService } from "app/user-login/user.service";


@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    CreateFriendComponent,
    InspectFriendComponent,
    EditFriendComponent,
    UserLoginComponent,
    LoginComponent,
    RegisterComponent,
    UserCrudComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FriendsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
