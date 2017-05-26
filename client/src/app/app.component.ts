import { Component } from '@angular/core';
import { User } from "app/user";
import { TriviaService } from "app/trivia.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcomeMessage = "Please Log In to continue"
  storage = window['localStorage']
  user = new User

 
  

//inject service as needed private userService: UserService
  constructor(private triviaService: TriviaService,
              private router: Router
  ){
    this.storage.setItem("welcomeMessage", "Please Log In to continue")
    if(!this.storage.user){
        this.storage.setItem("user", '')
      }
  }

  ngOnInit(){
    if(this.storage.user == ""){
      this.user.name = window.prompt("Welcome whats your user name?")
      this.storage.setItem("user", this.user.name)
    }
    this.triviaService.testing = false
    
  }

  ngOnChanges(){
    if(this.storage.user == ""){
      this.user.name = window.prompt("Welcome whats your user name?")
      this.storage.setItem("user", this.user.name)
    }
  }
    
  login(){
    this.user.name = window.prompt("Welcome whats your user name?")
    this.storage.setItem("user", this.user.name)
    this.triviaService.login(this.user)
  }



  logout(){
    this.storage.clear()
    this.user = new User
    this.storage.setItem("user", '')
    this.storage.setItem("welcomeMessage", "Please Log In to continue")
    this.router.navigateByUrl('/');
  }

  whatsinstorage(){
    console.log(this.storage)
  }



}
