const mongoose = require('mongoose');

//users have
//only user name when adding check if exists if yes login, if not add user and login
// users have no relationships


let UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

}, { timestamps: true })


mongoose.model("User", UserSchema)