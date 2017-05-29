var mongoose = require('mongoose');

//ccould add a sepperate schema of fake answers and have this randomly sample from the possible fake answers
//that would be better and may come back to that, for now it looks like only 2 fake answers are required
//don't forget that the answers should be displayed randomly

let AnswerSchema = new mongoose.Schema({
    answer: String,
    value: Boolean

})

let QuestionSchema = new mongoose.Schema({
    ask: String, //from the user schema
    answers : [AnswerSchema]
}, { timestamps: true })

// these fields must match your object keys on your 
//client side models as well



mongoose.model("Question", QuestionSchema)