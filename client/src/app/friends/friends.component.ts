import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Friend } from "./Friend"
import { FriendsService } from "./friends.service" 
// import {LocalStorageService, LocalStorage} from 'ng2-webstorage';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  all_friends = []
  components = {create : true, update: false, show: false, anotherapp: false}
  sample_friend = new Friend
  selectedFriend = new Friend
  inspectedID;
  show = false
  mystoredval
  storage = window['localStorage']
  

  @Output() logout = new EventEmitter
  constructor( private friends_service: FriendsService) {
    this.mystoredval = this.storage.message
   }

  ngOnInit() {
    this.updateFriendsList()
    this.selectedFriend = new Friend
    // console.log("init the selected friend ",this.selectedFriend)  
    //this.testData= this.friends_service.testData  //dummy var to use the service to pass thigns around
    if (this.storageAvailable('localStorage')) {
     console.log('Yippee! We can use localStorage awesomeness')
      }
      else {
	    console.log('Too bad, no localStorage for us')
    
    
    }   
  }

  saveStorage(){
    
    this.storage.message = this.mystoredval
    console.log("the storage is", this.storage.message)
    console.log("I saved it from", this.mystoredval)
    this.mystoredval = ''
    console.log("but now I cleared the local value", this.mystoredval)
  }

  showStorage(){
    console.log("the storage is", this.storage.message)
    this.mystoredval = this.storage.message
  }
  inspectStorage(){
    console.log("the storage object is", this.storage)
    // console.log("the storage object is", this.storage)
    
  }


  inspectFriend(_id){
    //find a friend by id and then set the result to this.selected_friend
    // console.log(_id)
    this.friends_service.find_a_friend(_id)
      .then((friend) => {    
        this.selectedFriend = friend
        this.inspectedID = _id
        return this.selectedFriend
        // console.log("the selected friend looks like:", this.selectedFriend)
      })
      .catch((err) => {console.log(err)})
    }

  updateFriend(_id){
    this.inspectFriend(_id)
      // .then(console.log("after you found a friend"))
  }

  deleteFriend(_id){
    // console.log("the id to delete is ", _id)
    this.friends_service.delete_friend(_id )
      .then((data) => {
        // console.log("front end is trying to delete this id", _id)
        this.selectedFriend = new Friend
        // this.selectedFriend= new Friend
        //emit an event to cause the parent to knwo to refresh
        this.updateFriendsList()
    })
      .catch((err) => {console.log(err)})
    // this.update = !this.update
  }


// take in a name of commponent and a _id and swap on/off as needed
  toggle(toggler, _id){
   
    for (let component in this.components ){
      if(toggler == component){
        if(_id == undefined){
          this.components[component] = !this.components[component]
        } else if(_id == this.inspectedID ){
          console.log("the _ids are equal", this.components[component])
          this.components[component] = !this.components[component]
        } else {
          this.components[component] = true
        }

      } else{
        this.components[component] = false
      }
    }
  }

  updateFriendsList(){
    this.friends_service.get_all_friends()
      .then((data) => {
        // console.log(data)
        this.all_friends = data       
      })
      .catch((err) => {console.log(err)})

  }

  clearUser(){
    this.logout.emit()
  }

  storageAvailable(type) {
    try {
        // var storage = window[type],
           let x = '__storage_test__';
        this.storage.setItem(x, x);
        console.log(this.storage[x])
        this.storage.test = "a test string"
        console.log(this.storage.test)
        this.storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            this.storage.length !== 0;
    }
}
  


}
