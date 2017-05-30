var mongoose = require('mongoose');
let Schema = mongoose.Schema

let AppointmentSchema = new Schema({
    scheduledDate : Date, //scjheduledDate stores date and time this is sepperate from createdAt
    complaint : String,
    patientID : {
        type: Schema.Types.ObjectId, 
        ref: 'User' //not usre if I need to import users here I'll find out
    },
    patientName : String
}, { timestamps: true })

mongoose.model("Appointment", AppointmentSchema)