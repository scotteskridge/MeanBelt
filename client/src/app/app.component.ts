import { Component } from '@angular/core';
import { UserService } from "app/user-login/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  welcomeMessage = "Please Log In to continue"
  storage = window['localStorage']


  constructor(private userService: UserService){
    this.storage.setItem("welcomeMessage", "Please Log In to continue")
    this.inspectStorage()
  }

  ngOnInit(){
    

  }

  // loggedin(){
  //   this.welcomeMessage = `${this.storage.firstName} ${this.storage.lastName} `
  // }

  logout(){
    this.storage.clear()
    this.storage.setItem("welcomeMessage", "Please Log In to continue")
  }

  toggleStorage(){
    if(this.storage.loggedIn == true){
      console.log("swapping logged in to false")
      this.storage.setItem('loggedIn' , 'false')
    } else {
      console.log("swapping logged in to false")
      this.storage.setItem('loggedIn' , 'true')
    }
  }

  inspectStorage(){
    // console.log("the localstorage object is", this.localstorage)
    console.log("the storage object is", this.storage)
    console.log("and the window object is:" , window)
    
  }
}
