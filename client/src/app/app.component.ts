import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  currentUser;
  welcomeMessage = "Please Log In to continue"
  storage = window['localStorage']
  constructor(){
    this.inspectStorage()
  }

  clearUser(){
    this.welcomeMessage = "Please Log In to continue"
    this.currentUser = false
  }

  inspectStorage(){
    // console.log("the localstorage object is", this.localstorage)
    console.log("the storage object is", this.storage)
    console.log("and the window object is:" , window)
    
  }
}
