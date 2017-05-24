import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Friend } from "./../Friend"
import { FriendsService } from "./../friends.service" 

@Component({
  selector: 'app-create-friend',
  templateUrl: './create-friend.component.html',
  styleUrls: ['./create-friend.component.css']
})
export class CreateFriendComponent implements OnInit {
  new_friend = new Friend

  @Output() refresh = new EventEmitter

  constructor(private friends_service: FriendsService) { }

  ngOnInit() {
    this.new_friend= new Friend
  }

  create_friend(){
    this.friends_service.create_friend(this.new_friend)
      .then((data) => {
        this.new_friend= new Friend
        //emit an event to cause the parent to knwo to refresh
        this.refresh.emit()
    })
      .catch((err) => {console.log(err)})
  }
}
