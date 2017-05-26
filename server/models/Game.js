var mongoose = require('mongoose');

//may need to add validations but it doesnt appear required yet

let GameSchema = new mongoose.Schema({
    player: String, //from the user schema
    numQuestions: Number,
    correctAnswers: Number,
}, { timestamps: true })

// these fields must match your object keys on your 
//client side models as well

mongoose.model("Game", GameSchema)