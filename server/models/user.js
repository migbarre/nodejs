const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'User name is required']
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    }
});

module.exports = mongoose.model('User', userSchema);