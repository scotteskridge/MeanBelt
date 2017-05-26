console.log('Game controller');
var mongoose = require('mongoose');
var Game = mongoose.model('Game');



class Games {
    get_all(req, res) {
        // console.log("the controller is looking for Game")
        Game.find({})
            .then(data => {
                // console.log("the server controller sent Game", Game)
                res.json(data)
            })
            .catch(err => {
                console.log("Game find error", err)
                res.status(500).json(err)
            })
    }

    create(req, res) {
        // console.log("the server received a create Game", req.body)
        let new_Game = new Game(req.body)
        new_Game.save()
            .then(() => {
                // console.log("and then the server sent a Game", new_Game)
                res.json(true)
            })
            .catch(err => {
                console.log("Game server save error", err)
            })
        res.json({ placeholder: 'create' });
    }


}


module.exports = new Games