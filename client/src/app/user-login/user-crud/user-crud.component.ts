import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from "app/user-login/User";
import { UserService } from "app/user-login/user.service";

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {
  @Input() allUsers
  @Output() refresh = new EventEmitter

  selectedUser;
  inspectedID;

  constructor(private userService: UserService) { }

  ngOnInit() {
    
  }

  inspect(_id){
    //find a friend by id and then set the result to this.selected_friend
    // console.log(_id)
    this.userService.find_a_user(_id)
      .then((result) => {    
        this.selectedUser = result
        this.inspectedID = _id
        return this.selectedUser
        // console.log("the selected friend looks like:", this.selectedUser)
      })
      .catch((err) => {console.log(err)})
  }

  update(){
    this.userService.update_user(this.selectedUser)
  .then((data) => {
    console.log("front end is trying to edit ")
    this.refresh.emit()
    })
  .catch((err) => {console.log(err)})
  } 

  
}
