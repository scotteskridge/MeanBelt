import { Component } from '@angular/core';
import { User } from "app/user";
import { AppointmentService } from "app/appointment.service";
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
  constructor(
    private appointmentService: AppointmentService,
    private router: Router
  ){
    this.storage.setItem("welcomeMessage", "Please Log In to continue")
    if(!this.storage.user){
        this.storage.setItem("user", '')
      }
  }

  ngOnInit(){
    if(this.storage.user == ""){
      this.login()
    }
    
    
  }

  ngOnChanges(){
    if(this.storage.user == ""){
      this.login()
    }
  }
    
  login(){
    this.user.name = window.prompt("Welcome what is the Patient's name?")
    this.storage.setItem("user", this.user.name)
    this.appointmentService.login(this.user).then((data) => {
      this.storage.setItem("userID", data._id)
      this.storage.setItem("userDate", data.createdAt)
    })
  }



  logout(){
    this.storage.clear()
    this.user = new User
    this.storage.setItem("user", '')
    this.storage.setItem("welcomeMessage", "Please Log In to continue")
    this.router.navigateByUrl('/');
    this.login()
  }

  // whatsinstorage(){
  //   console.log(this.storage)
  // }



}
