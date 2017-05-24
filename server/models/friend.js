var mongoose = require('mongoose');

let FriendSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthdate: Date
}, { timestamps: true })

// these fields must match your object keys on your 
//client side models as well

mongoose.model("Friend", FriendSchema)