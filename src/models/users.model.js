const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    province: {type: String},
    pets: [Object]
});

const User = new model('User', userSchema);

module.exports = User;

