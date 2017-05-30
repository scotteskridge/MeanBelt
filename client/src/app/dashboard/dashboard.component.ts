import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AppointmentService } from "app/appointment.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchText = ""
  allAppointments =[]
  storage = window['localStorage']
  currDate;

  message =""

  constructor(
    private appointmentService : AppointmentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllAppointment()
    this.message =""
    this.currDate = new Date()
    console.log("currDate is", this.currDate )
  }

  scheduleAppointment(){
    this.router.navigateByUrl('/makeAppointment');
  }

  getAllAppointment(){
    // console.log("client is asking for all appointments")
    this.appointmentService.get_all_appointments()
      .then((data) => {
        // console.log("client received data", data)
      
        this.allAppointments = data
        this.allAppointments.sort(function(a,b) { 
          return new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime() 
        });
        
      })
      .catch((err) => {console.log(err)})
  }

  sortbyAppointment(){

  }

  cancel(appointment){

    //check if appointment within 1 day and update message
    if(this.checkDate(appointment) < 1){
      this.message = "Your appointment is less than 24 hours away you can not cancel"   
    }
    //else go ahead and dealte
    else {
      this.appointmentService.delete_appointment(appointment)
        .then((data) => {
          this.getAllAppointment()
        })
        .catch((err) => {console.log(err)})
    }
  }

  checkDate(appointment){
    let timeDiff
    // console.log("appointment.scheduledDate is", appointment.scheduledDate)
    let appDate = new Date(appointment.scheduledDate)
    // console.log("appointment date is:",appDate )
    // console.log("now date is:", this.currDate)
    timeDiff = Math.abs(appDate.getTime() - this.currDate.getTime())
    timeDiff =(timeDiff / (1000 * 3600 * 24));
    // console.log(timeDiff)
    return timeDiff

  }
}
