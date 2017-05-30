console.log('routes');
let games = require('./../controllers/Games')
let questions = require('./../controllers/questions')
let users = require("./../controllers/users")

module.exports = function(app) {
    //User routes  Only needs login
    app.post('/user/login', users.login)
        // app.get('/user/findOne/:id', users.show)

    // //Games Routes
    app.post('/games/createGame', games.create)
    app.get('/games/get_allGames', games.get_all)

    //Questions Routes
    app.post('/questions/createQuestion', questions.create)
    app.post('/questions/deleteQuestion' , questions.delete)
    app.get('/questions/get_allQuestions', questions.get_all)
}