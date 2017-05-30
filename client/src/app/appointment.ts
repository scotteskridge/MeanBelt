export class Appointment {
    scheduledDate: Date;
    complaint;
    patientID; 
    patientName;
    createAt;
    updatedAt;
    _id;
}


//my mongoose schema has only one date object but my form is going to have an 
//input for both date and time does my front end model need to take in both
//and then parse them together somehow?

//I'm going to leave this object looking the same as mongoose but have my appointment 
//component stitch them together