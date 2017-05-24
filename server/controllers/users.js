console.log('User controller');
var mongoose = require('mongoose');
var User = mongoose.model('User');


class Users {
    get_all_users(req, res) {
        // console.log("the controller is looking for users")
        User.find({})
            .then(data => {
                // console.log("the server controller sent users", users)
                res.json(data)
            })
            .catch(err => {
                console.log("User find error", err)
                res.status(500).json(err)
            })
    }

    create(req, res) {
        // console.log("the server received a create user", req.body)
        let new_User = new User(req.body)
        new_User.save()
            .then(() => {
                // console.log("and then the server sent a User", new_User)
                res.json(true)
            })
            .catch(err => {
                console.log("User server save error", err)
            })
        res.json({ placeholder: 'create' });
    }

    update(req, res) {
        //this should look an aweful lot like the show or inspect but need
        //the mongoose version of update note .save()
        User.findOne({ _id: req.body._id })
            .then(user => {
                console.log("trying to update this user:", user)
                user.firstName = req.body.firstName
                user.lastName = req.body.lastName
                user.birthdate = req.body.birthdate
                user.save()
                    // console.log("after the update this User:", User)
                res.json(User)
            })
            .catch(err => {
                console.log("User find error", err)
                res.status(500).json(err)
            })
    }

    delete(req, res) {
        // console.log("the server is trying to delete this _id", req.params.id)
        User.remove({ _id: req.params.id })
            .then(() => { res.json(true) })
            .catch(err => {
                console.log("User find error", err)
                res.status(500).json(err)
            })
    }

    show(req, res) {
        // console.log("the server is trying to show this _id", req.params.id)
        //going to need to do a find based on the req.body._id
        //and then return that one User


        User.findOne({ _id: req.params.id })
            .then(data => { res.json(data) })
            .catch(err => {
                console.log("User find error", err)
                res.status(500).json(err)
            })
    }
}


module.exports = new Users