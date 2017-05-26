console.log('User controller');
var mongoose = require('mongoose');
var User = mongoose.model('User');


class Users {

    login(req, res) {
        console.log(req.body)
            // res.json(true)
        User.findOne({ name: req.body.name })
            .then(data => {
                if (data.name == req.body.name) {
                    //login
                    res.json(loggedUser)
                    console.log("passwords match")
                } else {
                    let new_User = new User(req.body)
                    new_User.save()
                        .then(() => {
                            // console.log("and then the server sent a User", new_User)
                            res.json(true)
                        })
                        .catch(err => {
                            console.log("User server save error", err)
                        })
                }
            })
            .catch(err => {
                console.log("User server save error", err)
                res.status(500).json(err)
            })
    }

    //dont need a helper function to create

    // create(name) {
    //     // console.log("the server received a create user", req.body)
    //     let new_User = new User(name)
    //     new_User.save()
    //         .then(() => {
    //             // console.log("and then the server sent a User", new_User)
    //             res.json(true)
    //         })
    //         .catch(err => {
    //             console.log("User server save error", err)
    //         })
    //     res.json({ placeholder: 'create' });
    // }

    //may delete this as well
    // show(req, res) {
    //     // console.log("the server is trying to show this _id", req.params.id)
    //     User.findOne({ _id: req.params._id })
    //         .then(data => { res.json(data) })
    //         .catch(err => {
    //             console.log("User find error", err)
    //             res.status(500).json(err)
    //         })
    // }
}


module.exports = new Users