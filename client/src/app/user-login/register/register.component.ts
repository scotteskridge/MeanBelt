import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from "app/user-login/User";
import { UserService } from "app/user-login/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  new_user = new User
  @Output() refresh = new EventEmitter

  constructor(private userService: UserService ) { }

  ngOnInit() {
    // console.log("the user object", this.new_user)
    // this.new_user.name.first = "Scott"
    
  }

  registerUser(){
    console.log("The user you registered is:" , this.new_user)
    this.userService.create_User(this.new_user)
      .then((data) => {
        this.new_user= new User
        //emit an event to cause the parent to knwo to refresh
        this.refresh.emit()
    })
      .catch((err) => {console.log(err)})
  }






}
