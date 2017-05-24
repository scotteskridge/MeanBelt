import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from "@angular/http"
import { User } from "./User"
import "rxjs"

const HEADERS = new Headers({ "Content-Type": "application/json"})
const OPTIONS = new RequestOptions({headers : HEADERS})

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  get_all_users(){
    // console.log("the service is trying to get all users")
    return this.http.get("/user/get_all_users")
      .map(data => data.json())
      .toPromise()
  }

  create_User(User: User){
    console.log("the user service tried to create:", User)
    return this.http.post("/user/create", User, OPTIONS).toPromise()
  }
  find_a_user(_id){
    return this.http.get(`/user/findOne/${_id}`)
    .map(data => data.json()).toPromise()
  }

  update_user(User){
    // console.log("The service tried to edit this friedn:", User)
    return this.http.post(`/user/update`, User, OPTIONS).toPromise()

  }

  delete_User(_id){
    // console.log("The service is trying to delete", _id)
    return this.http.post(`/user/delete/${_id}`, OPTIONS).toPromise()

  }

}


