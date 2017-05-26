import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from "app/user-login/User";
import { UserService } from "app/user-login/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user
  currentUser
  storage = window['localStorage']
  @Output() loggedIn = new EventEmitter
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = {email : "", password: "password" }
  }

  login(){
    //do stuff to login 
    //send a login request to the server and let it do the check on its side
     console.log("The user that is logging in is:" , this.user)
      this.userService.login(this.user)
      .then((res) => {
        //save user into storage
        console.log("The client received a responce:" ,res)
        console.log("The name object is:" ,res.name)
        this.storage.setItem('firstName' , res.name.first)
        this.storage.name = res.name.first
        this.storage.setItem('lastName' , res.name.last)
        this.storage.setItem('_id' , res._id)
        this.storage.welcomeMessage = `${res.name.first} ${res.name.last} `
        //toggle logged in flag to true
        this.storage.setItem('loggedIn' , 'true')
        this.loggedIn.emit()
        
    })
      .catch((err) => {console.log(err)})


    
    
    // this.storage.currentUser._id = this.currentUser._id
    //then emit an event that says your loggedin

    //I think the emitter could send back the user but I'm going to just save it in storage instead
    


  }

  message(){
    console.log("button test")
  }
}
