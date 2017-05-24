console.log('routes');
let friends = require('./../controllers/friends')
let users = require("./../controllers/users")

module.exports = function(app) {
    // app.get('/', friends.index)

    app.get('/friend/get_friends', friends.get_friends)
    app.post('/friend/create', friends.create)
    app.post('/friend/update', friends.update)
    app.post('/friend/delete/:id', friends.delete)
    app.get('/friend/show/:id', friends.show)
    app.get('/user/get_all_users', users.get_all_users)
    app.post('/user/create', users.create)
    app.post('/user/update', users.update)
    app.post('/user/delete/:id', users.delete)
    app.get('/user/findOne/:id', users.show)
}