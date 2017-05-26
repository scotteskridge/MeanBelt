import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from "app/user-login/user.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  allUsers = []
  showall = false

  @Output() loggedIn = new EventEmitter
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.updateUserList()
  }

  refresh(){
    this.updateUserList()
  }

  loggedin(){
    this.loggedIn.emit()
  }

  updateUserList(){
    this.userService.get_all_users()
      .then((data) => {
        // console.log(data)
        this.allUsers = data       
      })
      .catch((err) => {console.log(err)})
  }

  toServiceSubscribe(){
    this.userService.subscribeExample().subscribe(
      (res)=>{}, //do stuff with the response data
      (err)=>{}, //do stuff with the error}
      ()=>{} //do stuff on continue (after success) like redirect  can only do this on http subscribe    
    )
  }


}
