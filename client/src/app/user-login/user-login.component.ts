import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user-login/user.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  allUsers = []

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.updateUserList()
  }

  refresh(){
    this.updateUserList()
  }

  updateUserList(){
    this.userService.get_all_users()
      .then((data) => {
        // console.log(data)
        this.allUsers = data       
      })
      .catch((err) => {console.log(err)})
  }


}
