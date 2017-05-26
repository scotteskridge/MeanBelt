import { Component, OnInit, Output, EventEmitter, Input , OnChanges} from '@angular/core';
import { Friend } from "./../Friend"
import { FriendsService } from "./../friends.service" 

@Component({
  selector: 'app-edit-friend',
  templateUrl: './edit-friend.component.html',
  styleUrls: ['./edit-friend.component.css']
})
export class EditFriendComponent implements OnInit, OnChanges {

  @Output() refresh = new EventEmitter
  //becuase this is an input from the parent 2 way data binding is safe to use
  @Input() selectedFriend
  bdate
  constructor(private friends_service: FriendsService) {
    
   }

  ngOnInit() {
    this.selectedFriend.birthdate = this.selectedFriend.birthdate.slice(0,10)
  }

  ngOnChanges(){
    console.log("the selected birthdate is: ", typeof this.selectedFriend.birthdate)
    this.selectedFriend.birthdate = this.selectedFriend.birthdate.slice(0,10)
    // this.bdate = new Date(this.selectedFriend.birthdate).toLocaleDateString()

    // this.editFriend= this.selectedFriend
  }

  update_friend(){` `

    this.friends_service.update_friend(this.selectedFriend)
      .then((data) => {
        console.log("front end is trying to edit ")
        this.refresh.emit()
    })
      .catch((err) => {console.log(err)})
  }

  // friend.birthday = new Date(friend.birthday).toLocaleDateString();
  // var d = new Date("2015-03-25");

}
