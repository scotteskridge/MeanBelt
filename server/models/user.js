const mongoose = require('mongoose');

//users have
//name.first name.last
//phone 
//gender
//age
//password
//friends a list of friends schema
//email

//see this for email validation:

//  UserSchema.path('email').validate(function (email) {
//    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//    return emailRegex.test(email.text); // Assuming email has a text attribute
// }, 'The e-mail field cannot be empty.')

let UserSchema = new mongoose.Schema({
    name: {
        first: {
            type: String,
            required: [true, "this is for something else"],
            trim: true,
        },
        middle: {
            type: String,
            required: false,
            trim: true

        },
        last: {
            type: String,
            required: true,
            trim: true
        },
    },

    phone: {
        type: String,
        // validate: [{
        //         validator: function(number) {
        //             return /\d{3}-\d{3}-\d{4}/.test(number);
        //         },
        //         message: "{ VALUE } is not a valid phone number"
        //     },
        //     {
        //         validator: function(number) {
        //             return false;
        //         },
        //         message: "{ VALUE } failed this validator"
        //     }
        // ],
        required: [true, "Customer phone number required"]
    },

    address: {
        type: String
    },

    email: {
        type: String
    },

    gender: {
        type: String,
        enum: ['MALE', 'FEMALE'],
        uppercase: true,
        trim: true,
        default: "MALE"
    },

    birthdate: {
        type: Date,
        required: true
    },


    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
        // validate: {
        //     validator: function(value) {
        //         return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(value);
        //     },
        //     message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        // }
    },

    friends: {
        type: String
    }

}, { timestamps: true })


mongoose.model("User", UserSchema)