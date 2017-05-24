import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Friend } from "./../Friend"
import { FriendsService } from "./../friends.service" 

@Component({
  selector: 'app-edit-friend',
  templateUrl: './edit-friend.component.html',
  styleUrls: ['./edit-friend.component.css']
})
export class EditFriendComponent implements OnInit {

  @Output() refresh = new EventEmitter
  //becuase this is an input from the parent 2 way data binding is safe to use
  @Input() selectedFriend
  constructor(private friends_service: FriendsService) { }

  ngOnInit() {
    console.log(this.selectedFriend)
    // this.editFriend= this.selectedFriend
  }

  update_friend(){

    this.friends_service.update_friend(this.selectedFriend)
      .then((data) => {
        console.log("front end is trying to edit ")
        this.refresh.emit()
    })
      .catch((err) => {console.log(err)})
  }

}
