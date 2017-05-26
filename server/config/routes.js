console.log('routes');
let games = require('./../controllers/Games')
let questions = require('./../controllers/questions')
let users = require("./../controllers/users")

module.exports = function(app) {
    //User routes  Only needs login
    app.post('/user/login', users.login)
        // app.get('/user/findOne/:id', users.show)

    // //Games Routes
    app.post('/games/create', games.create)
    app.get('/games/get_all', games.get_all)

    //Questions Routes
    app.post('/questions/create', questions.create)
    app.get('/questions/get_all', questions.get_all)
}