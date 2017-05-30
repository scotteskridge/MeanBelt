import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from "@angular/http"
import { User } from "./User"
import "rxjs"


const HEADERS = new Headers({ "Content-Type": "application/json"})
const OPTIONS = new RequestOptions({headers : HEADERS})


@Injectable()
export class AppointmentService {

  constructor(private http: Http) { }

    login(data){
    // console.log("the user service tried to login:", data)
    return this.http.post(`/user/login`, data, OPTIONS)
    .map(res => res.json()).toPromise()
  }

    create_appointment(appointment){
    // console.log("service is sending", appointment)
    return this.http.post("/appointments/create_appointment", appointment, OPTIONS)
      .toPromise()
  }

  delete_appointment(appointment){
    return this.http.post("/appointments/delete_appointment", appointment, OPTIONS)
      .toPromise()
  }

  get_all_appointments(){
    // console.log("service is asking for all appointments")
    return this.http.get("/appointments/get_all_appointments")
      .map(data => data.json())
      .toPromise()
  }

}
