console.log('routes');
let appointments = require('./../controllers/appointments')
let users = require("./../controllers/users")

module.exports = function(app) {
    //User routes  Only needs login
    app.post('/user/login', users.login)
  
    //appointments Routes
    app.post('/appointments/create_appointment', appointments.create)
    app.post('/appointments/delete_appointment', appointments.delete)
    app.get('/appointments/get_all_appointments', appointments.get_all)
}