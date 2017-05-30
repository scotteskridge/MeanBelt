import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AppointmentService } from "app/appointment.service";
import { Appointment } from "app/appointment";

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit {
allAppointments = []
date;
time;
dateTime;
appointment = new Appointment
storage = window['localStorage']
message = ""


  constructor(
    private appointmentService : AppointmentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.message = ""
    this.getAllAppointment()
  }

  localDate(){
    this.dateTime = `${this.date}T${this.time}:00.000Z`
    // this.dateTime = new Date(this.dateTime)
    this.dateTime = this.dateTime.toLocaleString()
  }

  scheduleAppointment(){
    //stitch together the date
    this.dateTime = `${this.date}T${this.time}:00.000Z`
    this.dateTime = this.dateTime.toLocaleString()
    this.appointment.scheduledDate = this.dateTime
    //add the user
    this.appointment.patientID = this.storage.userID
    this.appointment.patientName = this.storage.user
    if(this.checkDuplicates(this.dateTime)){
      // console.log("Client is makeing an appoitnment:", this.appointment)
      //send to server
      this.appointmentService.create_appointment(this.appointment)
        .then((res) => {
          this.appointment = new Appointment
          this.router.navigateByUrl('/');
        })
        .catch((err) => {console.log(err)})
    } else{
      console.log("failed duplicate check")
      }
  }

  Cancel(){
    this.router.navigateByUrl('/');
  }


  //this is breaking becuase of time zone problems
  checkDuplicates(scheduledDate){
    for (let appointment of this.allAppointments){
      if (this.storage.user == appointment.patientName && appointment.scheduledDate == scheduledDate){
      this.message = "You have already scheduled an appointment for that day" 
      return false
    }
      else {
        return true
      }
   }
  }


  //could pass this variable in from storage input or service but I'm duplicating code for right now
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

}
