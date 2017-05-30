console.log('Appointment controller');
var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');


class Appointments {
    get_all(req, res) {
        // console.log("the controller is looking for Appointment")
        Appointment.find({})
            .then(data => {
                // console.log("the server controller sent Appointments", data)
                res.json(data)
            })
            .catch(err => {
                console.log("Appointment find error", err)
                res.status(500).json(err)
            })
    }


    //this create code is going to need to include the user Id to save I might just include that on client side
    create(req, res) {
        // console.log("the server received a create Appointment", req.body)
        let new_Appointment = new Appointment(req.body)
        new_Appointment.save()
            .then(() => {
                // console.log("and then the server sent a Appointment", new_Appointment)
                res.json(true)
            })
            .catch(err => {
                console.log("Appointment server save error", err)
            })
        res.json({ placeholder: 'create' });
    }

    delete(req,res){
        // console.log("server is deleteing:", req.body)
         Appointment.remove({ _id: req.body._id })
            .then(() => { res.json(true) })
            .catch(err => {
                console.log("Friends find error", err)
                res.status(500).json(err)
            })
    }


}


module.exports = new Appointments