import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inspect-friend',
  templateUrl: './inspect-friend.component.html',
  styleUrls: ['./inspect-friend.component.css']
})
export class InspectFriendComponent implements OnInit {

  @Input() selectedFriend
  constructor() { }

  ngOnInit() {
  }

}
