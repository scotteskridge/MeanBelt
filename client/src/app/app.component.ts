import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  welcomeMessage = "Please Log In to continue"
  storage = window['localStorage']


//inject service as needed private userService: UserService
  constructor(){
    this.storage.setItem("welcomeMessage", "Please Log In to continue")

  }

  ngOnInit(){
    

  }



  logout(){
    this.storage.clear()
    this.storage.setItem("welcomeMessage", "Please Log In to continue")
  }



}
