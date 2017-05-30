import { Pipe, PipeTransform } from '@angular/core';
import { Appointment } from "./appointment"


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


// 2 arguments what it filters and how it filters by
// right now this only filters by patient name may need to update it
  transform(appointments: Appointment[], search): Appointment[] {
    //this is the same as doing a for loop and looking to see where the appointment.player matched the 
    //search argument and will return -1 if it does not contain
    if (!appointments){return undefined}
    if(!search){return appointments}
    // console.log("the filter has appointments", appointments)
    //I dont know why but putting {} around the output of the arrow function breaks this
    search = search.toLowerCase()
    return appointments.filter((appointment) => appointment.patientName.toLowerCase().indexOf(search) >=0 || appointment.complaint.toLowerCase().indexOf(search) >=0)
  
  }

}
