console.log('Game controller');
var mongoose = require('mongoose');
var Game = mongoose.model('Game');



class Games {
    get_all(req, res) {
        // console.log("the controller is looking for Game")
        Game.find({})
            .then(data => {
                console.log("the server controller sent Games", data)
                res.json(data)
            })
            .catch(err => {
                console.log("Game find error", err)
                res.status(500).json(err)
            })
    }

    create(req, res) {
        // console.log("the server received a create Game", req.body)
        let newGame = new Game(req.body)
        console.log("the controller is saveing the newGame", newGame)
        newGame.save()
            .then(() => {
                // console.log("and then the server sent a Game", newGame)
                res.json(true)
            })
            .catch(err => {
                console.log("Game server save error", err)
            })
        res.json({ placeholder: 'create' });
    }


}


module.exports = new Games