console.log('Question controller');
var mongoose = require('mongoose');
var Question = mongoose.model('Question');


class Questions {
    get_all(req, res) {
        console.log("the controller is looking for Question")
        Question.find({})
            .then(data => {
                // console.log("the server controller sent Question", Question)
                res.json(data)
            })
            .catch(err => {
                console.log("Question find error", err)
                res.status(500).json(err)
            })
    }

    create(req, res) {
        console.log("the server received a create Question", req.body)
        let new_Question = new Question(req.body)
        new_Question.save()
            .then(() => {
                // console.log("and then the server sent a Question", new_Question)
                res.json(true)
            })
            .catch(err => {
                console.log("Question server save error", err)
            })
        res.json({ placeholder: 'create' });
    }


}


module.exports = new Questions